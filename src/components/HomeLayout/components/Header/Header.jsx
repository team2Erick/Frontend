import React from 'react';

import './Header.scss';

const imgProfile =
  'https://avatars0.githubusercontent.com/u/3347271?s=460&u=ee8da2edec3f538be118fefcab95badee62b18e1&v=4';

const Header = () => (
  <header className="container__header">
    <nav className="navbar">
      <section>
        <input type="search" placeholder="Search your entretaiment" />
      </section>
      <section className="profile">
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
      </section>
    </nav>
  </header>
);

export default Header;
