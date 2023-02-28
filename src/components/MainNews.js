import React from 'react';
import MI from '../assets/img/MI.webp';
import SI1 from '../assets/img/SI1.webp';
import SI2 from '../assets/img/SI2.webp';
import { FaPlay } from 'react-icons/fa'
function MainNews(props) {
    return (
        <div className='relative mt-5 px-1 py-5 before:z-[-1] before:content-[""] before:absolute before:h-full before:w-[calc(100%+1rem)] before:bg-primary before:top-0 before:left-0 before:translate-x-[-0.5rem]'>
            <main className='relative z-[-1]'>
                <section className='mb-5'>
                    <article className='relative'>
                        <img src={MI} alt='MI' />
                        <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-6xl'>
                            <FaPlay />
                        </span>
                    </article>
                    <article className='px-3 text-white'>
                        <h1 className='text-3xl mt-5 font-bold mb-5'>FPL Gameweek 26 Differentials</h1>
                        <p className='text-clr-dark'>These four Fantasy gems are owned by hardly any managers despite their big points potential</p>
                    </article>
                </section>
                <section className='mb-5 text-white'>
                    <article className='flex gap-3 bg-primary-light'>
                        <div>
                            <img src={SI1} alt='SI1' width='250' />
                        </div>
                        <div className='p-4'>
                            <h1 className='font-xl text-neutral font-bold'>Talking Tactics</h1>
                            <p className='pr-5 leading-5 text-base'>
                                Why Trossard is key to avoiding another upset against Everton
                            </p>
                        </div>
                    </article>
                </section>
                <section className='mb-5 text-white'>
                    <article className='flex gap-3 bg-primary-light'>
                        <div>
                            <img src={SI2} alt='SI1' width='250' />
                        </div>
                        <div className='p-4'>
                            <h1 className='font-xl text-neutral font-bold'>Talking Tactics</h1>
                            <p className='pr-5 leading-5 text-base'>
                                Why Trossard is key to avoiding another upset against Everton
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default MainNews;