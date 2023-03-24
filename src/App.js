import React from 'react';
import Nav from './components/shared-components/Nav';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Results from './pages/Results';
import Clubs from './pages/Clubs.js';
import Table from './pages/Table.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/shared-components/Footer';

function App(props) {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/table' element={<Table />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
