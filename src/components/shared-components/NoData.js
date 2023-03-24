import React from 'react';
import nodata from '../../assets/img/nodata2.svg';

function NoData(props) {
    return (
        <h1 className='text-center mt-3 forn-bold m-auto'>
            <span className='font-light mb-3 inline-block text-secoundary'>No Data Found</span>
            <img className='m-auto w-[200px]' src={nodata} alt='no-data' />
        </h1>
    );
}

export default NoData;