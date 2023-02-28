import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { BiFootball } from 'react-icons/bi';
import { MdEmojiEvents } from 'react-icons/md';
import { RxTable, RxCross2 } from 'react-icons/rx';
import PL from '../assets/img/PL.png';

function Nav() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const nav = [
    { name: 'Home', link: '/', icon: <BiFootball style={{ display: 'inline' }} /> },
    { name: 'Results', link: '/results', icon: <MdEmojiEvents style={{ display: 'inline' }} /> },
    { name: 'Fixture', link: '/fixtures', icon: <RxTable style={{ display: 'inline' }} /> },
  ];
  const iconStyle = { fontSize: '30px', cursor: 'pointer' }
  return (
    <main>
      {/* mobile */}
      <section className='p-2 bg-primary text-white flex justify-between items-center  text-xl'>
        <article className='flex items-center'>
          <span className='text-3xl pr-1 cursor-pointer w-20 mr-[-15px]'>
            <img src={PL} alt='img' />
          </span>
          <span className='leading-3 font-bold'>
            Premier
            <br />
            League
          </span>
        </article>
        <article className='hidden md:block'>
          <ul className='list-none flex gap-4'>
            {nav?.map((el, i) => {
              return (
                <li
                  key={i}
                  className={`text-lg ${i === 0
                    ? 'text-secoundary-light font-bold cursor-pointer'
                    : 'text-white cursor-pointer'
                    }`}
                >
                  <Link to={el?.link}>{el?.name}</Link>
                </li>
              );
            })}
          </ul>
        </article>
        <article className='flex'>
          <span className='px-2 mr-3 border border-secoundary-dark rounded-2xl text-lg'>
            Sign in
          </span>
          <button onClick={() => setSideBarOpen(!sideBarOpen)} className='md:hidden border-l-2 border-b-clr-dark px-3'>
            {
              sideBarOpen ? <RxCross2 style={iconStyle} /> : <GoThreeBars style={iconStyle} />
            }

          </button>
        </article>
      </section>
      <section className={`md:hidden absolute w-full h-[calc(100%-67px)] bg-primary top-[clac(100%-38px)] left-0 pt-2 ${sideBarOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'} transition-all duration-300 `}>
        <ul className='list-none'>
          {nav?.map((el, i) => {
            return (
              <li
                onClick={() => setSideBarOpen(false)}
                key={i}
                className={`text-clr-main hover:text-clr-light text-md cursor-pointer border-b-2border-b-primary-dark border-t-2 ${i === 0 ? 'border-t-secoundary' : 'border-t-primary'} bg-primary-light duration-300 flex gap-2 items-center group hover:pl-6`}
              >
                <Link to={el?.link} className='w-full  p-3'>
                  {el?.icon} {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      {/* end mobile */}
    </main>
  );
}

export default Nav;
