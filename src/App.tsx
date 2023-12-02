import { useState } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Navbar from './layouts/navbar';
import Homepage from './pages/homepage';
import Detailpage from './pages/detailpage';
import Createpage from './pages/createpage';


function App() {

  const Layout = () => {

    return (
      <div>
        <Navbar />
        <ScrollRestoration />
        <Outlet />

      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: '/post-detail/:id', element: <Detailpage />},
        { path: '/create-post', element: <Createpage />},

      ],
    }


  ]);



  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
