import React, { useEffect } from 'react';
import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/search.svg';
import './Header.scss';

const imgProfile =
  'https://avatars0.githubusercontent.com/u/3347271?s=460&u=ee8da2edec3f538be118fefcab95badee62b18e1&v=4';

const Header = () => {
  useEffect(()=>{
      const MobileMenu = document.getElementById('MobileMenu');
      const SideMenu = document.getElementById('sidemenu');
      const CloseMenu = document.getElementById('closemenu');

      MobileMenu.addEventListener('click', () => {
        if(SideMenu.classList.contains('menuinactive')) {
          SideMenu.classList.remove('menuinactive')
          SideMenu.classList.add('menuactive')
        } else {
          SideMenu.classList.remove('menuactive')
          SideMenu.classList.add('menuinactive')
        }
      })
      CloseMenu.addEventListener('click', () => {
        if(SideMenu.classList.contains('menuactive')) {
            SideMenu.classList.remove('menuactive')
            SideMenu.classList.add('menuinactive')
        }
      })
  })
  return(
  <header className="container__header">
    <nav className="navbar">
      <div className="navbar__mobile-button">
          <button id="MobileMenu"><img src={Burguer}/></button>
      </div>
      <div className="navbar__search">
        {/* <button><img src={Search}/><span>Search your entertaiment</span></button> */}
        <input type="search" placeholder="Search your entertaiment" />
      </div> 
      <div className="profile">
        <figure className="profile__container">
          <img
            className="profile__container--image"
            src={imgProfile}
            alt="perfil"
          />
        </figure>
        <div className="profile__container">
          <h3 className="profile__container--user">Mauricio Rodriguez</h3>
          <p className="profile__container--account">Premium</p>
        </div>
      </div>
    </nav>
  </header>
  )
};

export default Header;
