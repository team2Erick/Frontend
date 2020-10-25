import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/components/Menu.scss';

// data
import SidebarItems from './components/SidebarItems';
import MyTracks from './components/MyTracks';

// components
import Modal from '../../../Modal/Modal';
import Successful from '../../../Alert/Alert';

const Menu = () => {
  const [state, setState] = useState({
    currentPlayList: 'home',
    modal: false,
    newPlaylist: {
      /* rock: new Set(), */
    },
    success: '',
  });

  const newPlaylistRef = useRef(null);
  const newPlaylist = Object.keys(state.newPlaylist);

  const addNewPlaylist = (e) => {
    e.preventDefault();
    const list = newPlaylistRef.current.value;

    setState({
      ...state,
      modal: false,
      newPlaylist: { ...state.newPlaylist, [list]: new Set() },
      success: 'Playlist created successfully!',
    });
  };

  const handleModal = () => setState({ ...state, modal: !state.modal });

  return (
    <section className="container__menu">
      <figure>
        <img src="/src/assets/images/icon.svg" alt="icon" />
      </figure>
      <div className="menu">
        <ul className="menu__list">
          {SidebarItems.map((item, index) => (
            <li
              key={"menu_list" + index}
              className={item === state.currentPlayList ? 'active' : ''}
              onClick={() => { setState({ ...state, currentPlayList: item }) }}
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
          {MyTracks.map((item, index) => (
            <li
              key={"my_tracks" + index}
              className={item === state.currentPlayList ? 'active' : ''}
              onClick={() => { setState({ ...state, currentPlayList: item }) }}
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
            onClick={handleModal}
          >
            <div className="newPlaylist">
              <h3 className="menu__subtitle"> New Playlist</h3>
              <img
                src="/src/assets/images/icons/playlist.svg"
                className="menu__icon"
                alt="Plus"
              />
            </div>
          </li>
          {newPlaylist.map((item) => (
            <li
              key={item}
              className={item === state.currentPlayList ? 'active' : ''}
              onClick={() => {
                setState({ ...state, currentPlayList: item })
              }}
            >
              <img
                src="/src/assets/images/icons/newPlaylist.svg"
                className="menu__icon"
                alt="New Playlist"
              />
              {item}
            </li>
          ))}
          <Modal show={state.modal} close={handleModal}>
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
          <Successful
            success={state.success}
            close={() => {
              setState({ ...state, success: '' })
            }}
          />
        </ul>
      </div>
    </section>
  );
};

export default Menu;
