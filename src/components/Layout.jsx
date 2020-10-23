import React from 'react';

import Header from './Header';
import Menu from './Menu';
import Playbar from './Playbar';

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
