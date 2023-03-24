import React from 'react';
import Nav from './components/shared-components/Nav';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Results from './pages/Results';
import Clubs from './pages/Clubs.js';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/clubs/' element={<Clubs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
