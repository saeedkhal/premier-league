import React, { useEffect } from 'react';
import Header from '../components/shared-components/Header'
import { BsArrowRight, BsCircleFill } from 'react-icons/bs'
import FooterSponsor from '../components/shared-components/FooterSponsor';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTable } from '../features/table/tableSlice';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import Loading from '../components/shared-components/loading';




function Table() {
    const dispatch = useDispatch()
    const colors = {
        W: '#13cf00',
        L: '#d81920',
        D: '#76766f'
    }

    const { data, loading} = useSelector(state => state?.table);

    useEffect(() => {
        dispatch(fetchTable())
    }, []);
    return (
        <div>
            <Header title='Table' />
            <div className='premierleage-img mt-6 mb-4 mx-auto' />
            {
                loading ?
                ( <Loading />) :
                (

                         
                  <table className='w-[95%] xl:w-[90%]  text-center text-clr-main mt-1 mx-auto mb-4 border border-black/5'>
                      <thead>
                          <tr className='bg-clr-main bg-opacity-10 xl:[&>*]:px-6 h-10 text-xs'>
                              <th className='xl:hidden'>Pos</th>
                              <th className='hidden xl:table-cell'>Position</th>
      
                              <th className='text-start xl:w-full'>Club</th>
      
                              <th className='xl:hidden'>pl</th>
                              <th className='hidden xl:table-cell'>Played</th>
      
                              <th className='xl:hidden'>W</th>
                              <th className='hidden xl:table-cell'>Won</th>
      
                              <th className='xl:hidden'>D</th>
                              <th className='hidden xl:table-cell'>Drawn</th>
      
                              <th className='xl:hidden'>L</th>
                              <th className='hidden xl:table-cell'>Lose</th>
      
                              <th className='hidden xl:table-cell'>
      
                                  <span className='border-b border-clr-main border-dashed'>
                                      GF
                                  </span>
                              </th>
                              <th className='hidden xl:table-cell'>
      
                                  <span className='border-b border-clr-main border-dashed'>
                                      GA
                                  </span>
                              </th>
                              <th>
                                  <span className='border-b border-clr-main border-dashed'>
                                      GD
                                  </span>
                              </th>
      
                              <th className='xl:hidden'>Pts</th>
                              <th className='hidden xl:table-cell'>Points</th>
      
                              <th className='hidden xl:table-cell'>Form</th>
                              <th className='hidden xl:table-cell'>Next</th>
                          </tr>
                      </thead>
                      <tbody className='font-light text-black text-sm'>
                          {
                              data?.table?.map((club, i) => {
                                  return <tr key={i} className='border-b font-light h-10 relative border-b-black/[.1] [&>*]:font-light'>
                                      <td className='font-light flex items-center justify-center gap-2 h-10'>
                                          <span className='w-4'>
                                              {club?.position}
                                          </span>
      
                                          {
                                              club?.movment === 'none' && <div style={{ color: 'black', opacity: '0.5', fontSize: '5px' }}><BsCircleFill /> </div>
                                          }
                                          {
                                              club?.movment === 'down' && <div style={{ color: 'red', fontSize: '8px' }}><AiFillCaretDown /> </div>
                                          }
                                          {
                                              club?.movment === 'up' && <div style={{ color: 'green', fontSize: '8px' }}><AiFillCaretUp /> </div>
      
                                          }
                                      </td>
                                      <td className='xl:hidden'>
                                          <a href={club?.teamLink} className='flex items-center gap-2 font-light h-10 xl:px-6'>
                                              <img className='w-[25px]' src={club?.teamImg} alt='g' />
                                              {club?.teamAbb}
                                          </a>
                                      </td>
                                      <td className='hidden xl:table-cell'>
                                          <a href={club?.teamLink} className='flex items-center gap-2 font-light h-10 xl:px-6'>
                                              <img className='w-[25px]' src={club?.teamImg} alt='g' />
                                              {club?.teamName}
                                          </a>
                                      </td>
                                      <th>{club?.played}</th>
                                      <th>{club?.won}</th>
                                      <th>{club?.drawn}</th>
                                      <th>{club?.lost}</th>
                                      <th className='hidden xl:table-cell'>{club?.goalFor}</th>
                                      <td className='hidden xl:table-cell'>{club?.goalAgainst}</td>
                                      <td>{club?.goalDiffrence}</td>
                                      <th style={{ fontWeight: 'bold' }} >{club?.points}</th>
                                      <td className='hidden xl:table-cell'>
                                          <div className='flex items-center gap-1 justify-center text-white'>
                                              {
      
                                                  club?.formAbb?.map((Abb, i) => {
                                                      return <div style={{ background: colors[Abb?.formAbbreviation] }} className='group cursor-pointer rounded-full w-8 h-8 flex items-center justify-center'>
                                                          <span className='font-bold'>{Abb?.formAbbreviation}</span>
                                                          <div className='bg-white absolute shadow-[0_2px_8px_rgba(0,0,0,0.25)] top-[-60px] translate-x-[-75px] hidden group-hover:block text-primary-dark p-2 pr-4 after-popup min-w-[190px]'>
                                                              <section className='text-center mb-2 text-xs'>
                                                                  <article className='text-black/50 relative'>
                                                                      {Abb?.matchInfo}
                                                                      <span className='absolute top-0 right-[-10px]'>
                                                                          <BsArrowRight />
                                                                      </span>
                                                                  </article>
                                                              </section>
                                                              <section className='flex justify-center gap-1'>
                                                                  <article className='flex items-center gap-1'>
                                                                      <span className='font-bold'>{Abb?.homeTeam}</span>
                                                                      <span><img className='w-[20px]' src={Abb?.homeTeamImg} alt='img' /></span>
                                                                  </article>
                                                                  <article className='bg-primary text-white px-2'>
                                                                      {Abb?.score}
                                                                  </article>
                                                                  <article className='flex items-center gap-1'>
                                                                      <span><img className='w-[20px]' src={Abb?.awayTeamImg} alt='img' /></span>
                                                                      <span className='font-bold'>{Abb?.awayTeam}</span>
                                                                  </article>
      
                                                              </section>
                                                          </div>
                                                      </div>
                                                  })
                                              }
                                          </div>
      
                                      </td>
                                      <td className='hidden xl:table-cell'>
                                          <a href='/'>
                                              <div className='group border border-black border-opacity-10 rounded-full w-7 h-7 p-1 m-auto'>
                                                  <img alt='img' src={club?.nextMatch?.badgeImage} />
                                                  <div className='bg-white absolute shadow-[0_2px_8px_rgba(0,0,0,0.25)] top-[-60px] translate-x-[-160px] hidden group-hover:block text-primary-dark p-2 pr-4 after-popup min-w-[190px]'>
                                                      <section className='text-center mb-2 text-xs'>
                                                          <article className='text-black/50 relative'>
                                                              {club?.nextMatch?.matchInfo}
                                                              <span className='absolute top-0 right-[-10px]'>
                                                                  <BsArrowRight />
                                                              </span>
                                                          </article>
                                                      </section>
                                                      <section className='flex justify-center gap-1'>
                                                          <article className='flex items-center gap-1'>
                                                              <span className='font-bold'>{club?.nextMatch?.homeTeamAbbr}</span>
                                                              <span><img className='w-[20px]' src='https://resources.premierleague.com/premierleague/badges/20/t13@x2.png' alt='img' /></span>
                                                          </article>
                                                          <article className='px-2 border border-black/5'>
                                                              {club?.nextMatch?.time}
                                                          </article>
                                                          <article className='flex items-center gap-1'>
                                                              <span><img className='w-[20px]' src='https://resources.premierleague.com/premierleague/badges/20/t3@x2.png' alt='img' /></span>
                                                              <span className='font-bold'>{club?.nextMatch?.awayTeamAbbr}</span>
                                                          </article>
      
                                                      </section>
                                                  </div>
                                              </div>
                                          </a>
                                      </td>
                                  </tr>
                              })
                          }
      
                      </tbody>
                  </table> )}
            <FooterSponsor />
        </div>
    );
}

export default Table;