import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SP1 from '../assets/img/SP1.webp'
import SP2 from '../assets/img/SP2.webp'
import SP3 from '../assets/img/SP3.webp'
import SP4 from '../assets/img/SP4.webp'
import SP5 from '../assets/img/SP5.webp'
import SP6 from '../assets/img/SP6.webp'
import SP7 from '../assets/img/SP7.webp'
import SP8 from '../assets/img/SP8.webp'
import SP9 from '../assets/img/SP9.webp'
import SP10 from '../assets/img/SP10.webp'
const images = [SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9, SP10]
function Sponsores() {
    return (
        <div className='owl-container my-10 bg-clr-dark border-b-8 border-secoundary p'>
            <OwlCarousel className='owl-theme' loop margin={10} smartSpeed={1000} autoplayTimeout={3000} autoplay={true}>
                {
                    images?.map((el, i) => <div className='item' key={i}>
                        <img className='w-12 h-12 object-contain' src={el} alt={i} />
                    </div>)
                }
            </OwlCarousel>
        </div>
    );
}

export default Sponsores;