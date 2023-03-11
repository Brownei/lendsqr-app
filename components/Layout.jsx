import React from 'react'
import Menubar from './Menubar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        { children }
        <Menubar />
    </>
  );
}

export default Layout;