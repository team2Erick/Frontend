import React from 'react';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Player from '../Player/Player';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* {children} */}
      <Menu />
      <Player playlist={playlist} />
    </>
  );
};

export default Layout;
