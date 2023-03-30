import React, { useEffect } from 'react';
import { SiPremierleague } from 'react-icons/si'
import BIN from '../../assets/img/BIN.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {  useSelector } from 'react-redux';
// import { fetchEvents } from '../../features/events/eventsSlice';
import moment from 'moment';
import Loading from '../shared-components/loading';
import matches from '../../assets/data/matches';

function Fixtures() {
    // const dispatch = useDispatch();

    const { data, loading } = useSelector(state => state?.events);

    useEffect(() => {
        // dispatch(fetchEvents());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <main className='xl:mt-3 xl:min-w-[320px]'>
            <section className='text-center mb-3'>
                <p className='text-secoundary font-bold'>{data?.week}</p>
                <span className='text-primary text-xl font-bold'>
                    Premier
                    <SiPremierleague style={{ display: 'inline-block' }} />
                    League
                </span>
                <p className='font-light text-clr-main text-sm'>All times shown are your <span className='font-bold'>local time</span> </p>
            </section>
            {
                loading ? <Loading /> : matches?.map(match => {
                    return <div key={match?.time}>
                        <section className='text-center mt-10'>
                            <span className='font-bold'>
                                {match?.time}
                            </span>
                            {match?.events?.map(event => {
                                return <div key={event}>
                                    <a href='/' className='group border-b-2 p-2 border-clr-dark block pt-3 hover:border-secoundary backdrop:duration-300 xl:px-0'>
                                        <article className='grid grid-cols-3 items-center [&>div]:flex [&>div]:items-center justify-center relative'>
                                            <div className='justify-end'>
                                                <span className='mr-2 font-bold'>{event?.homeTeamAbb}</span>
                                                <img width='30px' src={event?.homeTeamImg} alt='img' />
                                            </div>
                                            <div className={`justify-center font-bold py-1 text-sm flex flex-col`}>
                                                <time className={`border border-clr-dark mx-3 px-3 py-[2px] ${!event?.matchStartsAt ? 'bg-primary text-white' : 'font-light'}`}>{!event?.matchStartsAt ? event?.matchScore : moment(Number(event?.matchStartsAt)).format('HH:MM')}</time>
                                            </div>
                                            <div>
                                                <img width='30px' src={event?.awayTeamImg} alt='img' />
                                                <team className='ml-2 font-bold'>{event?.awayTeamAbb}</team>
                                            </div>
                                            <div className='absolute right-0 group-hover:text-secoundary group-hover:translate-x-2 duration-300'>
                                                <AiOutlineArrowRight />
                                            </div>
                                        </article>
                                        <article className={`my-3  ${event?.matchStartsAt ? 'block' : 'hidden'}`}>
                                            {<img width='80px' src={BIN} alt='beinlog' className='m-auto' />}
                                        </article>
                                        <article className={`${event?.isLive ? 'flex' : 'hidden'} justify-center items-center gap-2`}>
                                            <span class="relative flex h-2 w-2">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[red] opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-2 w-2 bg-[red]"></span>
                                            </span>
                                            live
                                        </article>
                                    </a>
                                </div>
                            })}
                        </section>
                    </div>
                })
            }

        </main>
    );
}

export default Fixtures;