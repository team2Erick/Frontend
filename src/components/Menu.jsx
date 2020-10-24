import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SidebarItems from './SidebarItems';
import MyTracks from './MyTracks';
import Modal from './Modal';
import '../assets/styles/components/Menu.scss';

const Menu = () => {
  const [state, setState] = useState({
    currentPlayList: 'home',
    modal: false,
    newPlaylist: {
      /* rock: new Set(), */
    },
  });

  const newPlaylistRef = useRef(null);
  const newPlaylist = Object.keys(state.newPlaylist);

  const addNewPlaylist = e => {
    e.preventDefault();
    const list = newPlaylistRef.current.value;

    setState({
      ...state,
      modal: false,
      newPlaylist: { ...state.newPlaylist, [list]: new Set() },
    });
  };

  return (
    <section className="container__menu">
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
          <li
            className="new-playlist"
            onClick={() => {
              setState({ ...state, modal: true })
            }}
          >
            <h3 className="menu__subtitle"> New Playlist</h3>
          </li>
          {newPlaylist.map((item) => (
            <li
              key={item}
              className={item === state.currentPlayList ? 'active' : ''}
              onClick={() => {
                setState({ ...state, currentPlayList: item })
              }}
            >
              {item}
            </li>
          ))}
          <Modal
            show={state.modal}
            close={() => {
            setState({ ...state, modal: false });
            }}
          >
            <form onSubmit={addNewPlaylist}>
              <div className="title">Create a New PlayList</div>
              <div className="content-wrap">
                <input
                  type="text"
                  placeholder="My Playlist"
                  required
                  ref={newPlaylistRef}
                />
                <br />
                <button type="submit">create</button>
              </div>
            </form>
          </Modal>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
