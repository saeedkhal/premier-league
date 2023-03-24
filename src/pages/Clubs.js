import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/shared-components/loading';
import { getClubs } from '../features/clubs/clubsSlice'
function Clubs() {
    const { data, loading } = useSelector(state => state?.clubs)
    const [clubs, setClubs] = useState(data?.clubs || []);
    const [searchLoading, setSearchLoading] = useState(false);
    const handelSearch = (e) => {
        setSearchLoading(true);
        const searchValue = e.target.value.trim().toLowerCase();
        if (!searchValue) {
            setClubs(data.clubs)
        } else {
            setClubs((oldClcbs) => {
                return oldClcbs?.filter(club => club?.clubName.toLowerCase().startsWith(searchValue))
            })
        }
        setSearchLoading(false);

    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClubs());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <h1 className='text-6xl text-center mt-3 font-bold text-primary'>Clubs</h1>
            <div className='flex justify-center mt-3 max-w-md rounded-md m-auto bg-primary items-center text-white'>
                <input onChange={(e) => handelSearch(e)} placeholder='Search' className='w-[90%]  p-3 bg-primary outline-0' />
                <span className='bg-white text-clr-main text-2xl rounded-full p-1 cursor-pointer'>
                    <IoIosSearch />
                </span>
            </div>
            {
                loading || searchLoading ? <Loading /> : <>
                    <div className='mt-[3rem] lg:hidden mb-5'>
                        {
                            clubs?.map((club) => {
                                return <a href='/' className='justify-self-center'>
                                    <section className='group flex items-center gap-5 mx-6 mt-5 pb-2 border-b border-clr-dark lg:block lg:border-0'>
                                        <article>
                                            <img src={club?.smallClubImg} alt='img' />
                                        </article>
                                        <article className='grow'>
                                            <h3 className='font-bold text-xl'>{club?.clubName}</h3>
                                            <p className='font-light opacity-50'>{club?.stadiumName}</p>
                                        </article>
                                        <article className='cursor-pointer group-hover:text-secoundary transition-[300] pr-2 group-hover:pr-0 lg:hidden'>
                                            <AiOutlineArrowRight />
                                        </article>
                                    </section>
                                </a>
                            })
                        }
                    </div>
                    <main className='hidden lg:grid grid-cols-3 xl:grid-cols-5 mt-[3rem] max-w-2xl xl:max-w-[90%] m-auto gap-x-4 mb-5'>
                        {
                            clubs?.map((club) => {
                                return <a href={club?.clubLink}>
                                    <article className='text-white club-studeuim text-center'>
                                        <section className='h-[8rem] relative'>
                                            <div className='rounded-full bg-white inline-block p-3 top-[50%] left-1/2 absolute translate-x-[-50%] translate-y-[-20%] '>
                                                <img src={club?.clubImg} alt='img' />
                                            </div>
                                        </section>
                                        <section className='bg-primary h-[8rem]'>
                                            <h1 className='font-bold text-lg pt-8'>{club?.clubName}</h1>
                                            <p className='font-light text-sm opacity-50'>{club?.stadiumName}</p>
                                            <a href='/' className='flex items-center justify-center text-xs group gap-3 hover:underline mt-4'>
                                                <span className=''>Club Profile</span>
                                                <span className='group-hover:translate-x-2 transition-[300]'>
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </a>
                                        </section>
                                    </article>
                                </a>
                            })
                        }

                    </main>
                </>
            }

        </>
    );
}

export default Clubs;