import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/components/Menu.scss';

// data
import SidebarItems from './components/SidebarItems';
import MyTracks from './components/MyTracks';

// components
import Modal from '../../../Modal/Modal';
import Successful from '../../../Alert/Alert';
import { Context } from '../../HomeLayout';

const Menu = () => {
  const [MenuState, setState] = useState({
    modal: false,
    success: '',
  });

  const { state, dispatch } = useContext(Context);
  const newPlaylistRef = useRef(null);
  const newPlaylist = Object.keys(state.newPlaylist);

  const addNewPlaylist = (e) => {
    e.preventDefault();
    const list = newPlaylistRef.current.value;

    dispatch({ type: 'ADD_PLAYLIST', newPlaylist: list });

    setState({
      ...MenuState,
      modal: false,
      success: 'Playlist created successfully!',
    });
  };

  const handleModal = () => setState({ ...MenuState, modal: !MenuState.modal });

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
          {MyTracks.map((item) => (
            <li
              key={item}
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
                dispatch({ type: 'SET_PLAYLIST', newPlaylist: item })
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
          <Modal show={MenuState.modal} close={handleModal}>
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
            success={MenuState.success}
            close={() => {
              setState({ ...MenuState, success: '' });
            }}
          />
        </ul>
      </div>
    </section>
  );
};

export default Menu;
