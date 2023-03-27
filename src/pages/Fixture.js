import React from 'react';
import FooterSponsor from '../components/shared-components/FooterSponsor';
import Header from '../components/shared-components/Header';

function Results() {
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
      <article className='flex justify-center items-center gap-3 p-3 border-y border-y-black/10 my-2'>
        <span className='font-bold'>Arsenal</span>
        <span>
          <img width='25px' src='https://resources.premierleague.com/premierleague/badges/25/t3@x2.png' alt='homeTeam' />
        </span>
        <span className='bg-primary text-white fort-bold py-1 px-5 font-bold text-md'>4-1</span>
        <span>
          <img width='25px' src='https://resources.premierleague.com/premierleague/badges/25/t31@x2.png'  alt='awayTeam' />
        </span>
        <span className='font-bold'>Crystal balals</span>
      </article>
      <article className='h-8 bg-primary w-full flex'>
        <article className='w-[95%] bg-gradient-to-r from-secoundary to-neutral h-2 mx-auto self-end' />
      </article>
    </section>
    <FooterSponsor />
  </main>
}

export default Results;
