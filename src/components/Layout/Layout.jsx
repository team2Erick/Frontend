import React from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Playbar from '../Playbar/Playbar';

const Layout = ({children}) => {
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
