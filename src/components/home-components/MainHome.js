import React, { useState } from 'react';
import MainNews from './MainNews';
import Sponsores from './Sponsores';
import LatestNews from './LatestNews';
import LatestVideos from './LatestVideos';
import Fixtures from './Fixtures';
import Featured from './Featured';

function MainHome() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <main className='p-2 xl:p-0'>
                {/* Mobile */}
                <div className={`my-5 px-1 py-1 flex rounded-sm bg-secoundary xl:hidden max-w-md m-auto`}>
                    <section onClick={(() => setActiveTab(1))} className={`text-center grow ${activeTab === 1 ? 'bg-white' : 'text-white'} py-2 font-bold rounded-sm cursor-pointer`}>
                        Latest
                    </section>
                    <section onClick={(() => setActiveTab(2))} className={`text-center grow py-2 font-bold ${activeTab === 2 ? 'bg-white' : 'text-white'} rounded-sm cursor-pointer`}>
                        Matches
                    </section>

                </div>
                <section className='xl:hidden relative'>
                    {

                        activeTab === 1 ?
                            <>
                                <MainNews />
                                <Sponsores />
                                <LatestVideos />
                                <LatestNews />
                            </>
                            :
                            <>
                                <Fixtures />
                                <Featured />
                            </>
                    }
                </section>
                <section className='hidden xl:flex gap-10 p-10 justify-center'>
                    <div >
                        <Fixtures />
                        <Featured />
                    </div>
                    <div className='w-1 bg-clr-dark opacity-50 relative max-w-[10px]'></div>
                    <div >
                        <MainNews />
                        <Sponsores />
                        <LatestVideos />
                        <LatestNews />
                    </div>

                </section>

                {/* End Mobile */}
            </main>
        </>
    );
}

export default MainHome;