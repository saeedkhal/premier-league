import React from 'react';
import F1 from '../../assets/img/F1.png';
import CL1 from '../../assets/img/CL1.png';

const Stat = [{
    key: 'Appearances',
    value: 22,
},
{
    key: "Assist",
    value: 92
},
{
    key: "Goals",
    value: 92
},
{
    key: "Clean Sheets",
    value: 92
}

]
function Featured(props) {
    return (
        <main className='mt-10 shadow-[0_1px_4px_0_rgb(0,0,0,0.15)]'>
            <h1 className='text-2xl font-bold p-3'>
                Featured Player
            </h1>
            <section className='bg-primary p-5 pb-0 text-white flex justify-between items-center'>
                <div>

                    <h1 className='text-xl font-bold'>Riyad Mahrez</h1>
                    <p className='italic'>Forward</p>
                    <article className='font-light'>Algeria</article>
                </div>
                <div>
                    <img src={F1} alt='F1' />
                </div>
            </section>
            <section className='flex justify-between p-5 border-b-2 border-b-clr-dark'>
                <div className='font-light'>Club </div>
                <div className='font-bold'>Manchester City<img className='inline ml-3' src={CL1} alt='cl' />
                </div>
            </section>
            {
                Stat?.map((statEl) => <>
                    <section className='flex justify-between p-5 border-b-2 border-b-clr-dark last:border-b-0'>
                        <div className='font-light'>{statEl?.key} </div>
                        <div className='font-bold'>{statEl?.value}</div>
                    </section>

                </>)
            }
        </main>
    );
}

export default Featured;