import React from 'react';

function Loading() {
    return (
        <div className='min-h-[50vh]'>
            <div className='w-10 h-10 m-auto border-4 border-primary-dark border-b-white rounded-full animate-spin my-2'></div>
        </div>    
    );
}

export default Loading;