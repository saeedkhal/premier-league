import React, { useState } from 'react';
import MainNews from './MainNews';
import Sponsores from './Sponsores';
function MainHome() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <main className='p-2'>
                {/* Mobile */}
                <div className={`my-5 px-1 py-1 flex rounded-sm bg-secoundary xl:hidden max-w-md m-auto`}>
                    <section onClick={(() => setActiveTab(1))} className={`text-center grow ${activeTab === 1 ? 'bg-white' : 'text-white'} py-2 font-bold rounded-sm cursor-pointer`}>
                        Latest
                    </section>
                    <section onClick={(() => setActiveTab(2))} className={`text-center grow py-2 font-bold ${activeTab === 2 ? 'bg-white' : 'text-white'} rounded-sm cursor-pointer`}>
                        Matches
                    </section>

                </div>
                <MainNews />
                <Sponsores />
                {/* End Mobile */}
            </main>
        </>
    );
}

export default MainHome;