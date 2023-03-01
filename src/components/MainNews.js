import React from 'react';
import MI from '../assets/img/MI.webp';
import SI1 from '../assets/img/SI1.webp';
import SI2 from '../assets/img/SI2.webp';
import { FaPlay } from 'react-icons/fa';
import { TbNews } from 'react-icons/tb';
import { BsPlayFill } from 'react-icons/bs';



function MainNews(props) {
    return (
        <div className='z-0 relative px-1 py-5 before:z-[-1] before:content-[""] before:absolute before:h-full before:w-[calc(100%+1rem)] before:bg-primary before:top-0 before:left-0 before:translate-x-[-0.5rem]'>
            <main className='relative z-[-1]'>
                <section className='mb-5 md:flex md:gap-10'>
                    <article className='relative'>
                        <img className='md:w-full md:h-full object-cover' src={MI} alt='MI' />
                        <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-6xl'>
                            <FaPlay />
                        </span>
                    </article>
                    <article className='px-3 text-white'>
                        <h1 className='text-3xl mt-5 font-bold mb-5 md:text-5xl lg:text-6xl'>FPL Gameweek 26 Differentials</h1>
                        <p className='text-clr-dark md:text-md lg:text-xl'>These four Fantasy gems are owned by hardly any managers despite their big points potential</p>
                        <div className='hidden lg:block '>
                            <p className='mt-5 font-bold lg:mb-4 md:mt-8'>Realted Content</p>
                            <ui className='list-none mt-2 text-md'>
                                <li className='flex items-center gap-5 mb-2'>
                                    <i className='text-2xl bg-white rounded-full text-secoundary center w-11 h-11 flex items-center justify-center'>
                                        <TbNews />
                                    </i>
                                    <sapn className='text-clr-dark'> Match officials for Matchweek 25's midweek fixtures</sapn>
                                </li>
                                <li className='flex items-center gap-5 mb-2'>
                                    <i className='text-2xl bg-white rounded-full text-secoundary center w-11 h-11 flex items-center justify-center'>
                                        <TbNews />
                                    </i>
                                    <sapn className='text-clr-dark'> Match officials for Matchweek 25's midweek fixtures</sapn>
                                </li>
                                <li className='flex items-center gap-5 mb-2'>
                                    <i className='text-2xl bg-white rounded-full text-secoundary center w-11 h-11 flex items-center justify-center'>
                                        <BsPlayFill />
                                    </i>
                                    <sapn className='text-clr-dark'> Match officials for Matchweek 25's midweek fixtures</sapn>
                                </li>
                            </ui>
                        </div>
                    </article>
                </section>
                <section className='lg:flex gap-5'>
                    <section className='mb-5 text-white'>
                        <article className='flex gap-3 bg-primary-light'>
                            <div>
                                <img className='w-[230px] h-full object-cover' src={SI1} alt='SI1' />
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
                            <div className='grow-0'>
                                <img className='w-[230px] h-full object-cover' src={SI2} alt='SI1' />
                            </div>
                            <div className='p-4 grow'>
                                <h1 className='font-xl text-neutral font-bold'>Talking Tactics</h1>
                                <p className='pr-5 leading-5 text-base'>
                                    Why Trossard is key to avoiding another upset against Everton
                                </p>
                            </div>
                        </article>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default MainNews;