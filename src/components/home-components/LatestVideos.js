import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import VideoPlay from '../shared-components/VideoPlay';
function LatestVideos() {

    const { data } = useSelector(state => state?.news);
    const latestVideosmain = data?.latestVideosmain;
    const latestVideosSecoundary = data?.latestVideosSecoundary;


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
                <section className='md:grid md:grid-cols-2 gap-3'>
                    <article>
                        <a href='/' className='group'>
                            <div className='text-white text-md relative'>
                                <img className='w-full' src={latestVideosmain?.img?.replace(/\?.+/, '?width=600&height=340')} alt='' />
                                <VideoPlay time={latestVideosmain?.runTime} />
                            </div>
                            <div className='p-3 bg-gradient-to-r from-primary-dark to-secoundary  text-white md:p-5 md:pb-12'>
                                <h1 className='text-xl md:text-2xl group-hover:underline'>{latestVideosmain?.title}</h1>
                                <p className='font-light text-sm md:text-lg'>{latestVideosmain?.text}</p>
                            </div>
                        </a>
                    </article>
                    <article className='md:grid md:grid-cols-2 gap-2'>
                        {
                            latestVideosSecoundary?.map(el => {
                                return <a href='/' className='group'>
                                    <div className='flex gap-3 mt-2 md:mt-0 md:block items-center'>
                                        <div className='max-w-[50%] relative text-white md:max-w-[100%] min-w-[200px]'>
                                            <img className='w-full' src={el?.img.replace(/\?.+/, '?width=320&height=180')} alt='' />
                                            <VideoPlay time={el?.runTime} />
                                        </div>
                                        <div>
                                            <h1 className='text-md xl:text-xl font-light text-clr-main mt-3 md:mt-2 group-hover:underline'>
                                                {el?.title}
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            })
                        }

                    </article>
                </section>
            </main>
        </>
    );
}

export default LatestVideos;