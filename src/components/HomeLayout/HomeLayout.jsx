import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Playbar from './components/Playbar/Playbar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Menu />
      <Playbar />
    </>
  );
};

export default Layout;
