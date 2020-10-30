import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/search.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import './Header.scss';

const imgProfile =
  'https://avatars0.githubusercontent.com/u/3347271?s=460&u=ee8da2edec3f538be118fefcab95badee62b18e1&v=4';

const Header = () => {
  // const isLogged = false;
  const {isLogged} = useUser();

  useEffect(() => {
    const MobileMenu = document.getElementById('MobileMenu');
    const SideMenu = document.getElementById('sidemenu');
    const CloseMenu = document.getElementById('closemenu');
    const SearchButton = document.getElementById('searchbutton');
    const SearchBar = document.getElementById('searchbar');
    const ExitSearch = document.getElementById('exitsearch');

    MobileMenu.addEventListener('click', () => {
      if (SideMenu.classList.contains('menuinactive')) {
        SideMenu.classList.remove('menuinactive');
        SideMenu.classList.add('menuactive');
      } else {
        SideMenu.classList.remove('menuactive');
        SideMenu.classList.add('menuinactive');
      }
    });

    CloseMenu.addEventListener('click', () => {
      if (SideMenu.classList.contains('menuactive')) {
        SideMenu.classList.remove('menuactive');
        SideMenu.classList.add('menuinactive');
      }
    });

    SearchButton.addEventListener('click', () => {
      if (SearchBar.classList.contains('inactive')) {
        SearchBar.classList.remove('inactive');
        SearchBar.classList.add('active');
      }
    });

    ExitSearch.addEventListener('click', () => {
      if (SearchBar.classList.contains('active')) {
        SearchBar.classList.remove('active');
        SearchBar.classList.add('inactive');
      }
    });
  });
  return (
    <header className="container__header">
      <nav className="navbar">
        <div className="navbar__mobile-button">
          <button id="MobileMenu"><img src={Burguer}/></button>
        </div>
        <div className="navbar__search">
          <button id="searchbutton"><img src={Search}/><span>Search your entertaiment</span></button>
          <div className="navbar__search__inputsearch inactive" id="searchbar">
            <button id="exitsearch"><img src={Arrow}/></button><span><input type="search" placeholder="Search..."/></span>
          </div>
        </div>
        <div className="profile">
          {
            isLogged
              ? <Link to='/singup'>
                Logout
              </Link>
              : <Link to='/login'>
                Login
              </Link>
          }
          {/* <figure className="profile__container">
            <img
              className="profile__container--image"
              src={imgProfile}
              alt="perfil"
            />
          </figure> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
