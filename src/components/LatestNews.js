import React from 'react';
import { TbNews } from 'react-icons/tb';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';


import NE1 from '../assets/img/NE1.webp';
// import NE2 from '../assets/img/NE2.webp';
// import NE3 from '../assets/img/NE3.webp';
// import NE4 from '../assets/img/NE4.webp';
// import NE5 from '../assets/img/NE5.webp';
// import NE6 from '../assets/img/NE6.webp';

// const images = [
//     {img:NE1, title:'FPL Gameweek 26 captain picks', },

//     NE2,NE3,NE4,NE5,NE6]; 
function LatestNews(props) {
    return (
        <>
            <main>
                <section className='flex justify-between my-5'>
                    <h1 className='font-bold text-xl'>Premier League Awards</h1>
                    <a className='font-medium text-md group' href='/'>
                        <div className='flex items-center gap-2'>
                            <span className='group-hover:underline'>
                                Awards
                            </span>
                            <i className='text-secoundary group-hover:translate-x-1 duration-200'><AiOutlineArrowRight /></i>
                        </div>
                    </a>
                </section>
                <div className='md:grid md:grid-cols-3 gap-2'>
                    <a href='/' className='group'>
                        <section className='flex md:gap-10 gap-4 mb-2 md:block'>
                            <article className='max-w-[200px] md:max-w-full'>
                                <img className='w-full' src={NE1} alt='NE1' />
                            </article>
                            <article className='self-center md:px-2'>
                                <h5 className='text-secoundary italic font-bold mt-1'>News</h5>
                                <p className='md:leading-8 md:text-xl font-light hover:underline text-clr-main group-hover:underline'>
                                    Campbell: Arsenal's home fixtures hold key to title push
                                </p>
                                <div className='hidden md:block my-1 bg-clr-dark h-[1px] opacity-20' />
                            </article>
                            <article className='hidden md:block text-[#5b5b5b] mt-3'>
                                <div className='flex gap-5 items-center text-2xl px-4 mb-1'>
                                    <i className='text-secoundary'><TbNews /></i>
                                    <a href='/'>
                                        <p className='font-light text-sm hover:text-secoundary hover:underline'>
                                            On this day: Leicester put nine past Southampton
                                        </p>
                                    </a>
                                </div>
                                <div className='flex gap-5 items-center text-2xl px-4 mb-1'>
                                    <i className='text-secoundary'><BsPlayFill /></i>
                                    <a href='/'>
                                        <p className='font-light text-sm hover:text-secoundary hover:underline'>
                                            On this day: Leicester put nine past Southampton
                                        </p>
                                    </a>
                                </div>
                            </article>
                        </section>
                    </a>
                </div>
                <div className='my-3 bg-clr-dark h-[1px] opacity-20' />

            </main>
        </>
    );
}

export default LatestNews;