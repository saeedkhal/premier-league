import React from 'react';

function Header({ title }) {
    return (
        <div>
            <h1 className='text-6xl text-center mt-3 font-bold text-primary'>{title}</h1>
        </div>
    );
}

export default Header;