import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarItems from './SidebarItems';
import MyTracks from './MyTracks';
import '../assets/styles/components/Menu.scss';

const Menu = () => {
  const [state, setState] = useState({
    currentPlayList: 'home',
  });
  return (
    <section>
      <figure>
        <img src="/src/assets/images/icon.svg" alt="icon" />
      </figure>
      <div className="menu">
        <ul className="menu__list">
          {SidebarItems.map((item) => (
            <li
              key={item}
              className={ item === state.currentPlayList ? 'active' : '' }
              onClick={() => {setState({ ...state, currentPlayList: item})}}
            >
              <Link to={item.route}>
                <img src={item.image} className="menu__icon" alt={item.alt} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu">
        <h3 className="menu__subtitle">My Tracks</h3>
        <ul className="menu__list">
          {MyTracks.map((item) => (
            <li
              key={item}
              className={ item === state.currentPlayList ? 'active' : '' }
              onClick={() => {setState({ ...state, currentPlayList: item})}}
            >
              <Link to={item.route}>
                <img src={item.image} className="menu__icon" alt={item.alt} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu">
        <ul className="menu__list">
          <li>
            <h3 className="menu__subtitle"> New Playlist</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
