import React, { useEffect } from 'react';
import FooterSponsor from '../components/shared-components/FooterSponsor';
import Header from '../components/shared-components/Header';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFixture } from '../features/fixture/fixtureSlice';
import Loading from '../components/shared-components/loading';

function Fixtures() {
  const { data , loading } = useSelector(state => state?.fixture);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFixture());
  }, []);


  return <main className='xl:w-[70%] m-auto'>
    <Header title='Results' />
    {loading ? <Loading /> : data?.fixture?.map((ResultItem) => {
      return <div key={ResultItem?.date}>
              <section className='m-3'>
                <article className='flex justify-between items-center'>
                  <h1 className='font-bold text-xl'>
                    {ResultItem?.date}
                  </h1>
                  <div>
                    <figure className='competitionImage1'></figure>
                  </div>
                </article>
              </section>
           
        {
          ResultItem?.matches?.map((match,i) =>{
            return    <section>
            <article>
              <a href='/' className='group relative flex justify-center items-center gap-3 p-3 border-y border-y-black/10 my-2 xl:grid grid-cols-3'>
                <div className='grid grid-cols-[1fr_auto_1fr] gap-2'>
                  <section className='flex gap-2 justify-end'>
                    <span className='font-bold'>{match?.homeTeam}</span>
                   <span>
                     <img width='25px' src={match?.homeTeamImg} alt='homeTeam' />
                  </span>
                  </section>
                  <section className='self-center'>
                    <span className='border border-black/10 fort-bold py-1 px-5 font-bold text-md'>{match?.time}</span>
                  </section>
                  <section className='flex gap-2'>
                    <span>
                    <img width='25px' src={match?.awayTeamImg} alt='awayTeam' />
                    </span>
                    <span className='font-bold'>{match?.awayTeam}</span>
                  </section>
                </div>
                <div className='absolute top-1/2 right-5 translate-y-[-50%] group-hover:translate-x-2 group-hover:text-secoundary transition-[300]'>
                  <AiOutlineArrowRight />
                </div>
                <div className='hidden xl:flex items-center gap-2'>
                  <figure className='stadium-b' />
                  <span className='flex gap-1'>
                    <span>
                      {match?.stadiumName?.split(',')[0]},
                    </span>
                    <span className='font-bold'>{match?.stadiumName?.split(',')[1]}</span>
                  </span>
                </div>
              </a>
            </article>
            {
              ResultItem?.matches?.length  === i +1 
              ? <article className='h-8 bg-primary w-full flex'>
              <article className='w-[95%] bg-gradient-to-r from-secoundary to-neutral h-2 mx-auto self-end' />
            </article> : ""
            }

          </section>
          })
        }
    </div>
    })}
  

    <FooterSponsor />
  </main>
}

export default Fixtures;
