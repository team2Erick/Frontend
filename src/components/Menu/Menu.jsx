import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import SidebarItems from '../datos/SidebarItems';
import MyTracks from '../datos/MyTracks';
import Modal from '../Modal/Modal';
import Successful from '../Successful/Successful';
import StaticContext from '../../context/StaticContext';
import './Menu.scss';

const Menu = () => {
  const { state, dispatch } = useContext(StaticContext);

  const [stateMenu, setState] = useState({
    modal: false,
    success: '',
  });

  const newPlaylistRef = useRef(null);
  const newPlaylist = Object.keys(state.newPlaylist);

  const addNewPlaylist = (e) => {
    e.preventDefault();
    const list = newPlaylistRef.current.value;

    dispatch({ type: 'ADD_PLAYLIST', newPlaylist: list });

    setState({
      ...state,
      modal: false,
      success: 'Playlist created successfully!',
    });
  };

  const handleModal = () => setState({ ...stateMenu, modal: !stateMenu.modal });

  return (
    <section className="container__menu">
      <figure>
        <img src="/src/assets/images/icons/cday-n.svg" alt="icon" />
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
                dispatch({ type: 'SET_PLAYLIST', newPlayList: item })
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
          <Modal show={stateMenu.modal} close={handleModal}>
            <form onSubmit={addNewPlaylist}>
              <div className="title">Create a New PlayList</div>
              <div className="content-wrap">
                <input
                  type="text"
                  placeholder="My Playlist"
                  ref={newPlaylistRef}
                  required
                />
                <br />
                <button type="submit" className="content-wrap__button" >Create</button>
              </div>
            </form>
          </Modal>
          <Successful
            success={stateMenu.success}
            close={() => {
              setState({ ...stateMenu, success: '' });
            }}
          />
        </ul>
      </div>
    </section>
  );
};

export default Menu;
