import React, { useEffect } from 'react';
import FooterSponsor from '../components/shared-components/FooterSponsor';
import Header from '../components/shared-components/Header';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import {fetchReults} from '../features/results/resultsSlice';

function Results() {
  const { data } = useSelector(state => state?.results);

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(fetchReults());
  },[]);


  return <main>
    <Header title='Results' />

    <section className='m-3'>
      <article className='flex justify-between items-center'>
        <h1 className='font-bold text-xl'>
          Sun 19 Mar 2023
        </h1>
        <div>
          <figure className='competitionImage1'></figure>
        </div>
      </article>
    </section>
    <section>
      <article>
        <a href='/' className='group relative flex xl:justify-start justify-center items-center gap-3 p-3 border-y border-y-black/10 my-2'>
          <div className='flex items-center gap-3 xl:justify-center xl:w-1/3'>
            <span className='font-bold'>Arsenal</span>
            <span>
              <img width='25px' src='https://resources.premierleague.com/premierleague/badges/25/t3@x2.png' alt='homeTeam' />
            </span>
            <span className='bg-primary text-white fort-bold py-1 px-5 font-bold text-md'>4-1</span>
            <span>
              <img width='25px' src='https://resources.premierleague.com/premierleague/badges/25/t31@x2.png' alt='awayTeam' />
            </span>
            <span className='font-bold'>Crystal balals</span>
          </div>
          <div className='absolute top-1/2 right-5 translate-y-[-50%] group-hover:translate-x-2 group-hover:text-secoundary transition-[300]'>
            <AiOutlineArrowRight />
          </div>
          <div className='hidden xl:flex items-center gap-2 absolute left-[50%] translate-x-[-50%]'>
            <figure className='stadium-b' />
            <span className='flex gap-1'>
              <span>
             Villa Park,
              </span>
             <span className='font-bold'>Birmingham</span>
             </span>
          </div>
        </a>
      </article>
      <article className='h-8 bg-primary w-full flex'>
        <article className='w-[95%] bg-gradient-to-r from-secoundary to-neutral h-2 mx-auto self-end' />
      </article>
    </section>
    <FooterSponsor />
  </main>
}

export default Results;
