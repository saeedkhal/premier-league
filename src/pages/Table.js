import React from 'react';
import Header from '../components/shared-components/Header'
import { BsArrowRight } from 'react-icons/bs'

function Table() {
    const colors = {
        W: '#13cf00',
        L: '#d81920',
        D: '#76766f'
    }
    return (
        <div>
            <Header title='Table' />
            <div className='premierleage-img mt-6 mb-4 mx-auto' />
            <table className='w-[99%] xl:w-[80%] text-center text-clr-main mt-1 mx-auto mb-4'>
                <thead>
                    <tr className='bg-clr-main bg-opacity-10 xl:[&>*]:px-6'>
                        <th>pos</th>
                        <th className='text-start xl:w-full'>club</th>
                        <th>pl</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th className='hidden xl:table-cell'>GF</th>
                        <th className='hidden xl:table-cell'>GA</th>
                        <th>GD</th>
                        <th>Pts</th>
                        <th className='hidden xl:table-cell'>Form</th>
                        <th className='hidden xl:table-cell'>Next</th>
                    </tr>
                </thead>
                <tbody className='font-light text-black text-sm'>
                    {
                        [1, 2].map((e, i) => {
                            return <tr key={i} className='border-b font-light h-10 relative border-b-black/[.1] [&>*]:font-light'>
                                <td className='font-light'>1</td>
                                <td className='flex items-center gap-2 font-light h-10 xk:px-6'>
                                    <img className='w-[25px]' src='https://resources.premierleague.com/premierleague/badges/25/t3@x2.png' alt='g' />
                                    Ars
                                </td>
                                <th>25</th>
                                <th>22</th>
                                <th>3</th>
                                <th>2</th>
                                <th>+40</th>
                                <td>gf</td>
                                <td className='hidden xl:table-cell'>ga</td>
                                <th className='hidden xl:table-cell'>69</th>
                                <td className='hidden xl:table-cell'>
                                    <div className='flex items-center gap-1 justify-center text-white'>
                                        {

                                            ['W', 'L', 'D', 'W', 'W'].map((el, i) => {
                                                return <div style={{ background: colors[el] }} className='group cursor-pointer rounded-full w-8 h-8 flex items-center justify-center'>
                                                    <span className='font-bold'>{el}</span>
                                                    <div className='bg-white absolute shadow-[0_2px_8px_rgba(0,0,0,0.25)] top-[-60px] translate-x-[-85px] hidden group-hover:block text-primary-dark p-2 after-popup min-w-[210px]'>
                                                        <section className='flex justify-between items-center mb-1'>
                                                            <article className='mr-3'>Saturday 25 February 2023</article>
                                                            <article>
                                                                <BsArrowRight />
                                                            </article>
                                                        </section>
                                                        <section className='flex justify-center gap-1'>
                                                            <article className='flex items-center gap-1'>
                                                                <span>LEI</span>
                                                                <span><img className='w-[20px]' src='https://resources.premierleague.com/premierleague/badges/20/t13@x2.png' alt='img' /></span>
                                                            </article>
                                                            <article className='bg-primary text-white px-2'>
                                                                2-1
                                                            </article>
                                                            <article className='flex items-center gap-1'>
                                                                <span><img className='w-[20px]' src='https://resources.premierleague.com/premierleague/badges/20/t3@x2.png' alt='img' /></span>
                                                                <span>LEI</span>
                                                            </article>

                                                        </section>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>

                                </td>
                                <td className='hidden xl:table-cell'>
                                    <a href='/'>
                                        <div className='border border-black border-opacity-10 rounded-full w-7 h-7 p-1 m-auto'>
                                            <img alt='img' src='https://resources.premierleague.com/premierleague/badges/20/t2@x2.png' />
                                        </div>
                                    </a>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Table;