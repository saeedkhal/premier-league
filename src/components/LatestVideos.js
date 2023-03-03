import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Vi1 from '../assets/img/VI1.webp';
import Vi2 from '../assets/img/VI2.webp';
import { BsFillPlayFill } from 'react-icons/bs';
function latestVideos() {
    return (
        <>
            <main>
                <section className='flex justify-between my-5'>
                    <h1 className='font-bold text-xl'>Latest Videos</h1>
                    <a className='font-medium text-md group' href='/'>
                        <div className='flex items-center gap-2'>
                            <span className='group-hover:underline group-hover:text-secoundary'>
                                Videos
                            </span>
                            <i className='text-secoundary group-hover:translate-x-1 duration-200'><AiOutlineArrowRight /></i>
                        </div>
                    </a>
                </section>
                <section className='md:flex gap-3'>
                    <article>
                        <a href='/' className='group'>
                            <div className='text-white text-md relative'>
                                <img className='w-full' src={Vi1} alt='' />
                                <time className='flex absolute bottom-0 ml-1 mb-1'>
                                    <i className='bg-secoundary inline-bloc flex items-center px-1'><BsFillPlayFill /></i>
                                    <span className='bg-primary px-2 font-bold'>02:13</span>
                                </time>
                            </div>
                            <div className='p-3 bg-gradient-to-r from-primary-dark to-secoundary  text-white md:p-5 md:pb-12'>
                                <h1 className='text-xl md:text-2xl group-hover:underline'>FPL Gameweek 26 Scout Selection</h1>
                                <p className='font-light text-sm md:text-lg'>Mitoma and Mahrez feature in this week's ultimate Fantasy XI. How many do you own?</p>
                            </div>
                        </a>
                    </article>
                    <article className='md:grid md:grid-cols-2 gap-2'>
                        <a href='/' className='group'>
                            <div className='flex gap-3 mt-2 md:mt-0 md:block'>
                                <div className='max-w-[50%] relative text-white md:max-w-[100%]'>
                                    <img className='w-full' src={Vi2} alt='' />
                                    <time className='flex absolute bottom-0 ml-1 mb-1'>
                                        <i className='bg-secoundary inline-bloc flex items-center px-1'><BsFillPlayFill /></i>
                                        <span className='bg-primary px-2 font-bold'>02:13</span>
                                    </time>
                                </div>
                                <div>
                                    <h1 className='text-lg font-light text-clr-main mt-3 md:mt-0 group-hover:underline'>
                                        Matchweek 26 preview: Saturday's matches
                                    </h1>
                                </div>
                            </div>
                        </a>
                        <div>
                            saeed
                        </div>
                        <div>
                            saeed
                        </div>
                        <div>
                            saeed
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default latestVideos;