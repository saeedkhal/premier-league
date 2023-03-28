import React, { useEffect, useState } from 'react';
import Header from '../components/shared-components/Header';
import { BsArrowRight, BsCircleFill } from 'react-icons/bs';
import FooterSponsor from '../components/shared-components/FooterSponsor';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayer } from '../features/players/playersSlice';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import Loading from '../components/shared-components/loading';
import { IoIosSearch } from 'react-icons/io';

function Table() {
  const dispatch = useDispatch();
  const [searchLoading, setSearchLoading] = useState(false);
  const { data, loading } = useSelector((state) => state?.players);
  const [players, setPlayers] = useState(data?.players);

  const handelGetPlayesr = async () => {
    const res = await dispatch(fetchPlayer());
    setPlayers(res?.payload?.players);
  };

  const handelSearch = (e) => {
    setSearchLoading(true);
    const searchValue = e.target.value.trim().toLowerCase();
    if (!searchValue) {
      setPlayers(data?.players);
    } else {
      setPlayers(() => {
        return data?.players?.filter((player) =>
          player?.name?.toLowerCase().startsWith(searchValue)
        );
      });
    }
    setSearchLoading(false);
  };
  useEffect(() => {
    handelGetPlayesr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-[95%] xl:w-[90%] m-auto'>
      <Header title='Players' />
      <div className='flex justify-center mt-3 max-w-md rounded-md m-auto bg-primary items-center text-white w-[90%] p-2'>
        <input
          onChange={(e) => handelSearch(e)}
          placeholder='Search'
          className='w-[90%]  bg-primary outline-0'
        />
        <span className='bg-white text-clr-main text-2xl rounded-full p-1 cursor-pointer'>
          <IoIosSearch />
        </span>
      </div>
      <div className='premierleage-img mt-6 mb-4 mx-auto' />
      {loading || searchLoading ? (
        <Loading />
      ) : (
        <table className='w-full text-clr-main mt-1 mx-auto mb-4 text-center xl:text-start'>
          <thead>
            <tr className='bg-clr-main bg-opacity-10 xl:[&>*]:px-6 h-10 text-xs'>
              <th className='text-start xl:w-[60%] px-2 xl:px-0'>Player</th>
              <th className='xl:text-start xl:w-[20%]'>Position</th>
              <th className='xl:text-start xl:w-[20%]'>Nationality</th>
            </tr>
          </thead>
          <tbody className='font-light text-black text-sm'>
            {players?.slice(1,5)?.map((player) => {
              return (
                <tr className='border-b border-b-black/10 font-bold xl:[&>*]:px-6'>
                  <td>
                    <a href='/' className='group'>
                      <div className='flex items-center gap-2'>
                        <span>
                          <img width='50px' src={player?.img} alt='pImg' />
                        </span>
                        <span className='group-hover:underline'>
                          {player?.name}
                        </span>
                      </div>
                    </a>
                  </td>
                  <td>{player?.position}</td>
                  <td>
                    <div className='flex items-center gap-2 justify-center xl:justify-start'>
                      <span className={`${player?.nationalityImg}`}></span>
                      <span className='hidden xl:block'>
                        {player?.nationality}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <FooterSponsor />
    </div>
  );
}

export default Table;
