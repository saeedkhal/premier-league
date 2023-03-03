import React from 'react';
import SALogo from '../assets/img/SALogo.svg'
function Footer(props) {
    return (
        <footer className='bg-gradient-to-r from-primary-dark to-secoundary text-white p-5 text-center'>
            <img className='w-[50px] m-auto' src={SALogo} alt='' />
            <p className='font-bold tracking-wide'>
                © Saeed Khaled
            </p>
            <p className='font-light'>
                all Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;