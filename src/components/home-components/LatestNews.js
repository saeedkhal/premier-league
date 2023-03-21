import React from 'react';
import { TbNews } from 'react-icons/tb';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import NE1 from '../../assets/img/NE1.webp';
import { useSelector } from 'react-redux';

function LatestNews() {

    const { data } = useSelector(state => state?.news);
    const latestNews = data?.latestNews;
    return (
        <>
            <main>
                {
                    latestNews?.map((el, index) => {
                        return <div key={index}>
                            <section className='flex justify-between my-5'>
                                <h1 className='font-bold text-xl'>{el?.header}</h1>
                                <a className='font-medium text-md group' href='/'>
                                    <div className='flex items-center gap-2'>
                                        <span className='group-hover:underline'>
                                            Awards
                                        </span>
                                        <i className='text-secoundary group-hover:translate-x-1 duration-200'><AiOutlineArrowRight /></i>
                                    </div>
                                </a>
                            </section>
                            <div className={`md:grid grid-cols-${el?.list?.length === 3 ? 3 : 4} gap-2`}>
                                {
                                    el?.list?.map((item, i) => {
                                        return <a key={i} href='/' className='group'>
                                            <section className='flex md:gap-10 gap-4 mb-2 md:block'>
                                                <article className='max-w-[200px] md:max-w-full'>
                                                    <img className='w-full' src={item?.img.startsWith('https') ? item?.img?.replace(/\?.+/, '?width=500&height=333') : 'https://www.premierleague.com' + item?.img.replace('/sm', '')} alt='NE1' />
                                                </article>
                                                <article className='self-center md:px-2'>
                                                    <h5 className='text-secoundary italic font-bold mt-1'>{item?.tag}</h5>
                                                    <p className='md:leading-8 md:text-xl font-light hover:underline text-clr-main group-hover:underline'>
                                                        {item?.title}
                                                    </p>
                                                    <div className='hidden md:block my-1 bg-clr-dark h-[1px] opacity-20' />
                                                </article>
                                                <article className='hidden md:block text-[#5b5b5b] mt-3'>
                                                    {
                                                        item?.relatedArticles.length ? item?.relatedArticles?.map((newsEl, j) => {
                                                            <div key={j} className='flex gap-5 items-center text-2xl px-4 mb-1'>
                                                                <i className='text-secoundary'><TbNews /></i>
                                                                <a href='/'>
                                                                    <p className='font-light text-sm hover:text-secoundary hover:underline'>
                                                                        {newsEl?.text}
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        }) : null
                                                    }
                                                </article>

                                                this is need to be completed
                                            </section>

                                        </a>
                                    })
                                }
                            </div>
                            <div className='my-3 bg-clr-dark h-[1px] opacity-20' />
                        </div>
                    })
                }

            </main>
        </>
    );
}

export default LatestNews;