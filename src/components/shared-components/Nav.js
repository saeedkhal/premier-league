import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { BiFootball } from 'react-icons/bi';
import { MdEmojiEvents, MdExpandMore, MdOutlineMoreVert } from 'react-icons/md';
import { RxTable, RxCross2 } from 'react-icons/rx';
import { TbBuildingStadium } from 'react-icons/tb';
import { GiBabyfootPlayers } from 'react-icons/gi';

import PL from '../../assets/img/PL.png';
import { AiFillCaretDown } from 'react-icons/ai';
import {
  BsFacebook,
  BsInstagram,
  BsTable,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

function Nav() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [drowpDownOpen, setDropDownOpen] = useState(false);
  const nav = [
    {
      name: 'Home',
      link: '/',
      icon: <BiFootball style={{ display: 'inline' }} />,
    },
    {
      name: 'Table',
      link: '/table',
      icon: <BsTable style={{ display: 'inline' }} />,
    },
    {
      name: 'Clubs',
      link: '/clubs',
      icon: <TbBuildingStadium style={{ display: 'inline' }} />,
    },

    {
      name: 'More',
      link: '/more',
      icon: <MdOutlineMoreVert style={{ display: 'inline' }} />,
      submenu: [
        {
          name: 'Results',
          link: '/results',
          icon: <MdEmojiEvents style={{ display: 'inline' }} />,
        },
        {
          name: 'Fixture',
          link: '/fixtures',
          icon: <RxTable style={{ display: 'inline' }} />,
        },
        {
          name: 'Players',
          link: '/players',
          icon: <GiBabyfootPlayers style={{ display: 'inline' }} />,
        },
      ],
    },
  ];
  console.log(window.location.pathname);
  const iconStyle = { fontSize: '30px', cursor: 'pointer' };
  return (
    <main className='z-10 sticky w-full top-0'>
      {/* mobile */}
      <section className=' bg-primary text-white flex justify-between items-center  text-xl xl:border-b-2 xl:border-secoundary'>
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
          <ul className='list-none flex gap-4 relative items-center'>
            {nav?.map((el, i) => {
              return (
                <li key={i} className='text-lg group py-4 cursor-pointer'>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-secoundary-light cursor-pointer relative'
                        : 'text-white cursor-pointer relative'
                    }
                    to={el?.link}
                    onClick={(event) =>
                      el?.link === '/more' ? event.preventDefault() : ''
                    }
                  >
                    <div className='flex items-center'>
                      <span>{el?.name}</span>
                      {el?.submenu?.length && (
                        <span className='text-xs'>
                          <AiFillCaretDown />
                        </span>
                      )}
                    </div>
                    {el?.submenu?.length ? (
                      <div className='absolute bg-secoundary left-[50%] top-[calc(100%+1rem)] translate-x-[-50%] nav-before scale-0 group-hover:scale-100 transition-[300]'>
                        <div className='grid grid-cols-[1fr] py-2'>
                          {el?.submenu?.map((el, i) => {
                            return (
                              <Link key={i} to={el?.link}>
                                <div className='px-8'>
                                  <span className='hover:underline fort-bold text-sm text-white'>
                                    {el?.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </article>
        <article className='flex'>
          <div className='px-2 mr-3 border border-secoundary-dark rounded-2xl text-lg flex items-center gap-3 py-1'>
            <a
              target='_blank'
              href='https://www.facebook.com/premierleague'
              rel='noreferrer'
            >
              <BsFacebook />
            </a>
            <a
              target='_blank'
              href='https://www.youtube.com/premierleague'
              rel='noreferrer'
            >
              <BsYoutube />
            </a>
            <a
              target='_blank'
              href='https://twitter.com/premierleague'
              rel='noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/premierleague/'
              rel='noreferrer'
            >
              <BsInstagram />
            </a>
          </div>
          <button
            onClick={() => setSideBarOpen(!sideBarOpen)}
            className='md:hidden border-l-2 border-b-clr-dark px-3'
          >
            {sideBarOpen ? (
              <RxCross2 style={iconStyle} />
            ) : (
              <GoThreeBars style={iconStyle} />
            )}
          </button>
        </article>
      </section>
      <section
        className={`z-10 md:hidden fixed w-full h-[calc(100%-67px)] bg-primary top-[clac(100%-38px)] left-0 pt-2 ${
          sideBarOpen ? 'translate-x-[0]' : 'translate-x-[-100%]'
        } transition-all duration-300 `}
      >
        <ul className='list-none'>
          {nav?.map((el, i) => {
            return (
              <>
                <li
                  onClick={() => {
                    el?.submenu?.length
                      ? setDropDownOpen(!drowpDownOpen)
                      : setSideBarOpen(false);
                  }}
                  key={i}
                  className={`text-clr-dark hover:text-clr-light text-md cursor-pointer border-b-2border-b-primary-dark bg-primary-light  flex gap-2 items-center`}
                >
                  {el?.submenu?.length ? (
                    <div
                      className={`w-full border-t-2  p-3 ${
                        i === 0 ? 'border-t-secoundary' : 'border-t-primary'
                      }`}
                    >
                      <div className='flex items-center justify-between'>
                        <span>
                          {el?.icon} {el.name}
                        </span>
                        <span>
                          <MdExpandMore />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={el?.link}
                      className={`w-full border-t-2  p-3 ${
                        i === 0 ? 'border-t-secoundary' : 'border-t-primary'
                      } hover:pl-6 duration-300`}
                    >
                      {el?.icon} {el.name}
                    </NavLink>
                  )}
                </li>
                {el?.submenu?.map((el, i) => {
                  return (
                    <li
                      onClick={() => setSideBarOpen(false)}
                      key={i}
                      className={`${
                        drowpDownOpen ? 'hidden' : 'block'
                      } text-clr-dark hover:text-clr-light text-md cursor-pointer border-b-2border-b-primary-dark bg-primary-light  flex gap-2 items-center`}
                    >
                      <NavLink
                        to={el?.link}
                        className={`w-full border-t-2  p-3 border-t-primary hover:pl-6 duration-300`}
                      >
                        {el?.icon} {el.name}
                      </NavLink>
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
      </section>
      {/* end mobile */}
    </main>
  );
}

export default Nav;
