import React from 'react';
import { TbNews } from 'react-icons/tb';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';

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
                            <div className={`md:grid gap-2 grid-cols-${el?.list?.length > 4 ? '4' : String(el?.list?.length)} ${el?.list?.length === 2 ? 'grid-cols-2' : ''}`}>
                                {
                                    el?.list?.map((item, i) => {
                                        return <>
                                            <div>
                                                <a key={i} href='/'>
                                                    <section className='flex md:gap-10 gap-4 mb-2 md:block group'>
                                                        <article className='max-w-[200px] md:max-w-full min-w-[200px]'>
                                                            <img className='w-full' src={item?.img.startsWith('https') ? item?.img?.replace(/\?.+/, '?width=500&height=333') : 'https://www.premierleague.com' + item?.img.replace('/sm', '')} alt='NE1' />
                                                        </article>
                                                        <article className='self-center md:px-2'>
                                                            <h5 className='text-secoundary italic font-bold mt-1'>{item?.tag}</h5>
                                                            <p className='md:leading-8 md:text-xl hover:underline text-clr-main group-hover:underline'>
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
                                                    </section>
                                                </a>
                                                {
                                                    item?.relatedArticles?.map(relatedItem => {
                                                        return <>
                                                            <div className='flex gap-2 px-2 items-center'>
                                                                <article className='text-2xl text-secoundary mb-2'>

                                                                    {relatedItem?.isVideo ? <MdOutlineOndemandVideo /> : (relatedItem?.imgIcon ? <img src={relatedItem?.imgIcon} alt='img' /> : <TbNews />)}
                                                                </article>
                                                                <article className='grow'>
                                                                    <a href='/' className='text-clr-main font-light hover:text-secoundary hover:border-b border-secoundary'>
                                                                        Choose your Barclays Manager of the Month
                                                                    </a>
                                                                </article>
                                                            </div>
                                                        </>
                                                    })
                                                }

                                            </div>

                                        </>
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