import React from 'react';
import SP1 from '../../assets/img/SP1.webp'
import SP3 from '../../assets/img/SP3.webp'
import SP4 from '../../assets/img/SP4.webp'
import SP6 from '../../assets/img/SP6.webp'
import SP7 from '../../assets/img/SP7.webp'
import SP8 from '../../assets/img/SP8.webp'
import SP9 from '../../assets/img/SP9.webp'
import SP10 from '../../assets/img/SP10.webp';
const images = [SP10, SP1, SP3, SP4, SP6, SP7, SP8, SP9]
function FooterSponsor(props) {
    return (
        <main className='px-3 gap-3 flex justify-center items-center flex-wrap my-2'>
            {
                images?.map((sponsor, i) => {
                    return <section key={i}>
                        <img className='w-[150px] object-scale-down' src={sponsor} alt='sp' />
                    </section>
                })
            }

        </main>
    );
}

export default FooterSponsor;