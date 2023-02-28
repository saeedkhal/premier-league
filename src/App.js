import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Fixtures from './pages/Fixtures';
import Results from './pages/Results';
import Test from './pages/Test';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/results' element={<Results />} />
        <Route path='/fixtures' element={<Fixtures />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
