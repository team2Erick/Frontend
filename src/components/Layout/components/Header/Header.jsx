import React, { useEffect } from 'react';
import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/search.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import CloseInfo from '../../../../assets/images/icons/close.svg' 
import Logo from '../../../../assets/images/icons/cday-n.svg'
import './Header.scss';
const imgProfile =
  'https://avatars0.githubusercontent.com/u/3347271?s=460&u=ee8da2edec3f538be118fefcab95badee62b18e1&v=4';

const Header = () => {
  useEffect(()=>{
      const MobileMenu = document.getElementById('MobileMenu');
      const SideMenu = document.getElementById('sidemenu');
      const CloseMenu = document.getElementById('closemenu');
      const SearchButton = document.getElementById('searchbutton');
      const SearchBar = document.getElementById('searchbar');
      const ExitSearch = document.getElementById('exitsearch');
      const Profile = document.getElementById('profile');
      const UserModal = document.getElementById('usermodal');
      const CloseModalInfo = document.getElementById('closemodalinfo');
      const Navbar = document.getElementById('navbar');
      const LogoScroll = document.getElementById('logoscroll')

      MobileMenu.addEventListener('click', () => {
        if(SideMenu.classList.contains('menuinactive')) {
          SideMenu.classList.remove('menuinactive');
          SideMenu.classList.add('menuactive');
        } else {
          SideMenu.classList.remove('menuactive');
          SideMenu.classList.add('menuinactive');
        }
      });
      CloseMenu.addEventListener('click', () => {
        if(SideMenu.classList.contains('menuactive')) {
            SideMenu.classList.remove('menuactive');
            SideMenu.classList.add('menuinactive');
        }
      });
      SearchButton.addEventListener('click', () => {
        if(SearchBar.classList.contains('inactive')) {
          SearchBar.classList.remove('inactive');
          SearchBar.classList.add('active');
        }
      });
      ExitSearch.addEventListener('click', () => {
        if(SearchBar.classList.contains('active')){
          SearchBar.classList.remove('active');
          SearchBar.classList.add('inactive');
        }
      });
      Profile.addEventListener('click', () => {
        if(UserModal.classList.contains('inactive')) {
          UserModal.classList.remove('inactive');
          UserModal.classList.add('active');
        } else {
          UserModal.classList.remove('active');
          UserModal.classList.add('inactive');
        }
      });
      CloseModalInfo.addEventListener('click', () => {
        if(UserModal.classList.contains('active')) {
          UserModal.classList.remove('active');
          UserModal.classList.add('inactive');
        }
      });
      window.addEventListener('scroll', () => {
        if(window.scrollY >= 100) {
          Navbar.classList.remove('navbar')
          Navbar.classList.add('scroll')

        } else {
          Navbar.classList.remove('scroll');
          Navbar.classList.add('navbar')
        }
      })
      window.addEventListener('scroll', () => {
        if(window.scrollY >= 100) {
          LogoScroll.style.display = 'block'

        } else {
          LogoScroll.style.display = 'none'
        }
      })
  })
  return(
  <header className="container__header">
    <nav className="navbar" id="navbar">
      <div className="logoscroll" id="logoscroll" style={{ display : "none"}}>
        <img src={Logo}/>
      </div>
      <div className="navbar__mobile-button">
          <button id="MobileMenu"><img src={Burguer}/></button>
      </div>
      <div className="navbar__search">
        <button id="searchbutton"><img src={Search}/><span>Search your entertaiment</span></button>
        <div className="navbar__search__inputsearch inactive" id="searchbar">
            <button id="exitsearch"><img src={Arrow}/></button>
            <span>
              <form action="post">
                 <input type="search" placeholder="Search..."/>
              </form>
            </span>
        </div>
        
      </div> 
      <div className="profile" id="profile">
        <figure className="profile__container">
          <img
            className="profile__container--image"
            src={imgProfile}
            alt="perfil"
          />
        </figure>
      </div>
    </nav>
      <div className="userinfo inactive" id="usermodal">
      <button className="userinfo__closeinfo" id="closemodalinfo"><img src={CloseInfo}/></button>
          <h2>Mauricio Rodriguez</h2>
          <div className="userinfo__separator"></div>
          <h3>Cuenta premium</h3>
      </div>
  </header>
  )
};

export default Header;
