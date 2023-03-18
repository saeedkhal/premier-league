import React, { useEffect } from 'react';
import { SiPremierleague } from 'react-icons/si'
import MCU from '../../assets/img/MCU.png';
import NEW from '../../assets/img/NEW.png';
import BIN from '../../assets/img/BIN.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../features/events/eventsSlice'
function Fixtures() {
    const dispatch = useDispatch();

    const events = useSelector(state => state?.events.data);

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);
    return (
        <main className='xl:mt-3 xl:min-w-[320px]'>
            <section className='text-center'>
                <p className='text-secoundary font-bold'>Matchweek 26</p>
                <span className='text-primary text-xl font-bold'>
                    Premier
                    <SiPremierleague style={{ display: 'inline-block' }} />
                    League
                </span>
                <p className='font-light text-clr-main text-sm'>All times shown are your <span className='font-bold'>local time</span> </p>
            </section>
            <section className='text-center mt-10'>
                <span className='text-clr-dark font-bold'>
                    Saturday 4 March
                </span>
                <a href='/' className='group border-b-2 border-clr-dark mb-5 block p-5 pb-2 hover:border-secoundary backdrop:duration-300 xl:px-0'>
                    <article className='flex items-center [&>div]:flex [&>div]:items-center justify-center relative'>
                        <div>
                            <span className='mr-2 font-bold'>MCI</span>
                            <img width='30px' src={MCU} alt='img' />
                        </div>
                        <div className='font-light px-2 border border-clr-dark mx-3 text-sm'>
                            <time>14:30</time>
                        </div>
                        <div>
                            <img width='30px' src={NEW} alt='img' />
                            <team className='ml-2 font-bold'>NEW</team>
                        </div>
                        <div className='absolute right-0 group-hover:text-secoundary group-hover:translate-x-2 duration-300'>
                            <AiOutlineArrowRight />
                        </div>
                    </article>
                    <article className='mt-3'>
                        <img width='80px' src={BIN} alt='beinlog' className='m-auto' />
                    </article>
                </a>
                <a href='/' className='group border-b-2 border-clr-dark mb-5 block p-5 pb-2 hover:border-secoundary backdrop:duration-300 xl:px-0'>
                    <article className='flex items-center [&>div]:flex [&>div]:items-center justify-center relative'>
                        <div>
                            <team className='mr-2 font-bold'>MCI</team>
                            <img width='30px' src={MCU} alt='img' />
                        </div>
                        <div className='font-light px-2 border border-clr-dark mx-3 text-sm'>
                            <time>14:30</time>
                        </div>
                        <div>
                            <img width='30px' src={NEW} alt='img' />
                            <team className='ml-2 font-bold'>NEW</team>
                        </div>
                        <div className='absolute right-0 group-hover:text-secoundary group-hover:translate-x-2 duration-300'>
                            <AiOutlineArrowRight />
                        </div>
                    </article>
                    <article className='mt-3'>
                        <img width='80px' src={BIN} alt='beinlog' className='m-auto' />
                    </article>
                </a>
            </section>
        </main>
    );
}

export default Fixtures;