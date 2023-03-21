import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

function VideoPlay({ time }) {
    return (
        <div>
            <span className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-6xl opacity-80'>
                <FaPlay />
            </span>
            <time className='flex absolute bottom-0 ml-1 mb-1'>
                <i className='bg-secoundary inline-bloc flex items-center px-1'><BsFillPlayFill /></i>
                <span className='bg-primary px-2 font-bold'>{time}</span>
            </time>
        </div>
    );
}

export default VideoPlay;