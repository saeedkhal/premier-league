import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Fixture from './pages/Fixture';
import Results from './pages/Results';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/fixture",
    element: <Fixture />,
  },
]);

function App(props) {
  return (
    <>
      <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;