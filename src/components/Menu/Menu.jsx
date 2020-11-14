import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import SidebarItems from '../datos/SidebarItems';
import MyTracks from '../datos/MyTracks';
import Modal from '../Modal/Modal';
import Successful from '../Successful/Successful';

import Store from '../../store';

import './Menu.scss';

const Menu = () => {
  const { state, setState } = useContext(Store);
  const [newPlaylist, setNewPlaylist] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleModal = () => {
    setMessage('Welcome to CDay, have a good day ;)');
    setShowSuccess(true);
  };

  const handlePlayPlaylist = (item) => {
    console.log(item);
  }

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
              className={item === state.currentPlayList ? 'active' : ''}
              onClick={() => {
                setState({ ...state, currentPlayList: item });
              }}
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
              onClick={() => {
                setState({ ...state, currentPlayList: item });
              }}
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
          <li className="new-playlist" onClick={handleModal}>
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
            <li>
              <div onClick={() => { handlePlayPlaylist(item) }}>
                <img
                  src="/src/assets/images/icons/newPlaylist.svg"
                  className="menu__icon"
                  alt="New Playlist"
                />
                {item}
              </div>

            </li>
          ))}
          <Modal show={show} close={close}>
            <form onSubmit={addNewPlaylist}>
              <div className="title">Create a New PlayList</div>
              <div className="content-wrap">
                <input
                  type="text"
                  value={newPlaylist}
                  onChange={(e) => {
                    setNewPlaylist(e.target.value);
                  }}
                  placeholder="My Playlist"
                  required
                />
                <br />
                <button type="submit">
                  Create
                </button>
              </div>
            </form>
          </Modal>
          {showSuccess && (
            <Successful
              success={message}
              close={() => {
                setShowSuccess(false);
              }}
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
