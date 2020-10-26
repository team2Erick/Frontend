 import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Playbar from '../Playbar/Playbar';
import './layout.scss'

const Layout = ({children}) => {
  return (  
    <>
    <div className="layout">
      <div className="layout__menu">
       <Menu />
      </div>
    <div className="layout__mainsection">
      <Header />
      {children}
      <Playbar />
    </div>
    </div> 
    </>
  );
};

export default Layout;
