import React, { useEffect } from 'react';
import CL1 from '../../assets/img/CL1.png';
import { fetchCards } from '../../features/cards/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
function Featured() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state?.cards)
    useEffect(() => {
        dispatch(fetchCards())
    }, [])
    return (

        <>
            {
                data?.cards?.map((card, i) => {
                    return <main key={i} className='mt-10 shadow-[0_1px_4px_0_rgb(0,0,0,0.15)]'>
                        <h1 className='text-2xl font-bold p-3'>
                            {card?.statsTitle}
                        </h1>
                        <section className='bg-primary px-5 pt-2 text-white flex justify-between items-center'>
                            <div>
                                <h1 className='text-xl font-bold'>{card?.statName}</h1>
                                <p className='italic'>{card?.position}</p>
                                <article className='font-light flex items-center gap-2'>
                                    <div className={card?.flagClass}>
                                    </div>
                                    {card?.playerCountry}
                                </article>
                            </div>
                            <div className='max-w-[35%] xl:max-w-[40%]'>
                                <img className='w-full' src={card?.playerImg || card?.missingImg} alt='F1' />
                            </div>
                        </section>
                        <section className='flex justify-between p-5 border-b-2 border-b-clr-dark'>
                            <div className='font-light'>Club </div>
                            <div className='font-bold'>Manchester City<img className='inline ml-3' src={CL1} alt='cl' />
                            </div>
                        </section>
                        {
                            card?.statsList?.map((statEl) => <>
                                <section className='flex justify-between p-5 border-b-2 border-b-clr-dark last:border-b-0'>
                                    <div className='font-light'>{statEl?.key} </div>
                                    <div className='font-bold'>{statEl?.value}</div>
                                </section>

                            </>)
                        }
                    </main>
                })
            }



        </>
    );
}

export default Featured;