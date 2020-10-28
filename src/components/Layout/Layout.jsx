import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Player from './components/Player/Player';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="layout__menu menuinactive" id="sidemenu">
          <Menu />
        </div>
        <Header />
        {children}
        <Player />
      </div>
    </>
  );
};

export default Layout;
