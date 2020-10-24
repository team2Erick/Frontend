import React from 'react';

import Header from './Header';
import Menu from './Menu';

import Player from './components/Player/Player';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Menu />
      <Player url="/src/assets/audio/test.mp3" />
    </>
  );
};

export default Layout;
