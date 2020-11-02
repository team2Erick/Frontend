import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="layout__menu menuinactive" id="sidemenu">
          <Menu />
        </div>
        <div className="layout__mainsection">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
