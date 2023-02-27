import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Fixture from './pages/Fixture';
import Results from './pages/Results';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/results' element={<Results />} />
        <Route path='/fixture' element={<Fixture />} />
      </Routes>
    </>
  );
}

export default App;
