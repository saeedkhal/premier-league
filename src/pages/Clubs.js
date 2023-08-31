import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/shared-components/loading';
import { getClubs } from '../features/clubs/clubsSlice';
import FooterSponsor from '../components/shared-components/FooterSponsor';
import NoData from '../components/shared-components/NoData';
import Header from '../components/shared-components/Header';
function Clubs() {
    const { data, loading } = useSelector(state => state?.clubs)
    const [clubs, setClubs] = useState(data?.clubs || []);
    const [searchLoading, setSearchLoading] = useState(false);
    const handelSearch = (e) => {
        setSearchLoading(true);
        const searchValue = e.target.value.trim().toLowerCase()
        if (!searchValue) {
            setClubs(data.clubs)
        } else {
            setClubs(() => {
                return data?.clubs?.filter(club => club?.clubName.toLowerCase().startsWith(searchValue))
            })
        }
        setSearchLoading(false);

    }
    const dispatch = useDispatch();
    const handelGetClubs = async () => {
        const res = await dispatch(getClubs());
        console.log(res)
        setClubs(res?.payload)
    }
    useEffect(() => {
        handelGetClubs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const bg = (i) => {
        const ti = `/imgs/stadium/t${i + 1}.jpg`;
        return {
            backgroundImage: `url(${ti})`,
        }
    }
    return (
        <>
            <Header title='Clubs' />
            <div className='flex justify-center mt-3 max-w-md rounded-md m-auto bg-primary items-center text-white w-[90%] p-2'>
                <input onChange={(e) => handelSearch(e)} placeholder='Search' className='w-[90%]  bg-primary outline-0' />
                <span className='bg-white text-clr-main text-2xl rounded-full p-1 cursor-pointer'>
                    <IoIosSearch />
                </span>
            </div>
            <div className='premierleage-img mt-6 mb-4 mx-auto' />

            {
                loading || searchLoading
                    ? <Loading />
                    : (!clubs?.length
                        ? <div className='min-h-[42vh]'><NoData /></div>
                        : <main >
                            <div className='mt-[3rem] lg:hidden mb-5'>
                                {
                                    clubs?.length > 0 ?
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
                                        }) : <div>No Clubs Found</div>
                                }
                            </div>
                            {
                                <main className='hidden lg:grid grid-cols-3 xl:grid-cols-5 mt-[3rem] max-w-2xl xl:max-w-[90%] m-auto gap-4 mb-5'>
                                    {
                                        clubs?.map((club, i) => {
                                            return <a href={club?.clubLink}>
                                                <article style={bg(i)} className='text-white group text-center bg-no-repeat bg-cover'>
                                                    <section className='h-[8rem] relative'>
                                                        <div className='rounded-full bg-white inline-block p-3 top-[50%] left-1/2 absolute translate-x-[-50%] translate-y-[-15%] '>
                                                            <img className='max-w-[80px] rounded-full' src={club?.clubImg} alt='img' />
                                                        </div>
                                                    </section>
                                                    <section className='bg-primary h-[9rem]'>
                                                        <h1 className='font-bold text-lg pt-8'>{club?.clubName}</h1>
                                                        <p className='font-light text-sm opacity-50'>{club?.stadiumName}</p>
                                                        <a href='/' className='flex group-hover:text-secoundary items-center justify-center text-xs  gap-3 hover:underline mt-4'>
                                                            <span className=''>Club Profile</span>
                                                            <span className='group-hover:translate-x-2  transition-[300]'>
                                                                <AiOutlineArrowRight />
                                                            </span>
                                                        </a>
                                                    </section>
                                                </article>
                                            </a>
                                        })
                                    }

                                </main>
                            }
                        </main>)
            }
            <FooterSponsor />
        </>
    );
}

export default Clubs;