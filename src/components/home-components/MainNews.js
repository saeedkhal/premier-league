import React, { useEffect } from 'react';
import { TbNews } from 'react-icons/tb';
import { BsPlayFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../features/news/newsSlice';

function MainNews() {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state?.news);
    const mainNews = data?.mainNews;
    const secoundryNews = data?.secoundryNews;
    useEffect(() => {
        dispatch(fetchNews())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='z-0 relative px-1 py-5 xl:p-5 before:z-[-1] before:content-[""] before:absolute before:h-full before:w-[calc(100%+1rem)] before:bg-primary before:top-0 before:left-0 before:translate-x-[-0.5rem] before:xl:translate-x-[0] xl:before:w-full'>
            <main className='relative z-[-1]'>
                <section className='mb-5 md:flex md:gap-10'>
                    <article className='relative md:w-full'>
                        <img className='w-full min-w-[400px] md:h-full object-cover' src={mainNews?.mainNewImg} alt='MI' />
                        {/* <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-6xl'>
                            <FaPlay />
                        </span> */}
                    </article>
                    <article className='px-3 text-white'>
                        <h1 className='text-xl mt-5 font-bold mb-5 md:text-3xl lg:text-3xl'>{mainNews?.title}</h1>
                        <p className='md:text-md lg:text-xl font-light'>{mainNews?.text}</p>
                        <div className='hidden lg:block '>
                            <p className='mt-5 font-bold lg:mb-4 md:mt-8'>Realted Content</p>
                            <ul className='list-none mt-2 text-md'>

                                {
                                    mainNews?.related?.map((el, index) => {
                                        return <div key={index}>
                                            <li className='flex items-center gap-5 mb-2'>
                                                <i className='text-2xl bg-white rounded-full text-secoundary center w-11 h-11 flex items-center justify-center'>
                                                    {el?.isVideo ? <BsPlayFill /> : <TbNews />}
                                                </i>
                                                <span className='text-clr-dark font-light'> {el?.text} </span>
                                            </li>
                                        </div>
                                    })
                                }
                            </ul>
                        </div>
                    </article>
                </section>
                <section className='lg:grid grid-cols-2 gap-5 font-light'>
                    {
                        secoundryNews?.map((el, index) => {
                            return <section key={index} className='mb-5 text-white grow'>
                                <article className='flex gap-3 bg-primary-light items-center'>
                                    <div>
                                        <img className='w-[150px] h-full object-cover max-h-[100px]' src={el?.img} alt='SI1' />
                                    </div>
                                    <div className='p-4'>
                                        <h1 className='font-xl text-neutral font-bold italic'>{el?.tag}</h1>
                                        <p className='pr-1 leading-5 text-base font-bold'>
                                            {el?.title}
                                        </p>
                                    </div>
                                </article>
                            </section>
                        })
                    }
                </section>
            </main>
        </div>
    );
}

export default MainNews;