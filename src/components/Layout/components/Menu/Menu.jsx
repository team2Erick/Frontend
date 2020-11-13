import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Modal from '../../../Modal/Modal';
import Successful from '../../../Successful/Successful';
import Store from '../../../../store';
import api from '../../../../services/api';

import Logo from '../../../../assets/images/icons/cday-n.svg';
import CloseIcon from '../../../../assets/images/icons/close.svg';
import newPlus from '../../../../assets/images/icons/newPlaylist.svg';
import Plus from '../../../../assets/images/icons/playlist.svg';
import './Menu.scss';

import DiscoverIcon from '../../../../assets/images/icons/discover.svg';
import AlbumsIcon from '../../../../assets/images/icons/albums.svg';
import ArtistsIcon from '../../../../assets/images/icons/artists.svg';

import FavoriteIcon from '../../../../assets/images/icons/favourite-grey.svg';
import RecentHistory from '../../../../assets/images/icons/history.svg';

const SidebarItems = [
  {
    image: DiscoverIcon,
    alt: 'discover',
    name: 'Discover',
    route: '/',
  },
  {
    image: AlbumsIcon,
    alt: 'Albums',
    name: 'Albums',
    route: '/albums',
  },
  {
    image: AlbumsIcon,
    alt: 'Charts',
    name: 'Charts',
    route: '/charts',
  },
  {
    image: ArtistsIcon,
    alt: 'Artists',
    name: 'Genre',
    route: '/artists',
  },
];

const MyTracks = [
  {
    image: FavoriteIcon,
    alt: 'Favorite',
    name: 'Favorites',
    route: '/favourite',
  },
  {
    image: RecentHistory,
    alt: 'Recent history',
    name: 'Recent history',
    route: '/history',
  },
];

const Menu = () => {
  const { state, setState } = useContext(Store);
  const [modal, setModal] = useState({
    modal: false,
  });
  const [nameList, setNameList] = useState('');
  const [newPlaylist, setNewPlaylist] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handlePlus = () => {
    setModal({ ...modal, modal: !modal.modal });
  };

  const addNewPlaylist = async () => {
    alert(nameList);
    const itemList = await api.post(
      'usermusic/create-playlist/' + state.user.id,
      { name: nameList }
    );
    setMessage(itemList.data.data.System);
    setShowSuccess(true);
  };

  const getNewPlaylist = async () => {
    const response = await api.get('usermusic/playlist/' + state.user.id);
    setNewPlaylist(response.data.data);
  };

  /* useEffect(() => {
    getNewPlaylist();
    console.log(newPlaylist);
  }, []); */

  return (
    <section className="container__menu">
      <button id="closemenu">
        <img src={CloseIcon} />
      </button>
      <figure>
        <Link to="/">
          <img src={Logo} alt="icon" />
        </Link>
      </figure>
      <div className="menu">
        <ul className="menu__list">
          {SidebarItems.map((item) => (
            <li
              key={item}
              className={item === state.currentPlayList ? 'active' : ''}
              // onClick={() => {
              // setState({ ...state, currentPlayList: item });
              // }}
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
              // onClick={() => {
              // setState({ ...state, currentPlayList: item });
              // }}
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
          <li className="new-playlist">
            <div className="newPlaylist">
              <h3 className="menu__subtitle"> New Playlist</h3>
              <img src={Plus} className="menu__icon" alt="Plus" onClick={handlePlus} />
            </div>
          </li>
          {newPlaylist.map((list, index) => (
            <li
              key={list}
              className={list === state.currentPlayList ? 'active' : ''}
            >
              {/* <img src={NewPlus} className="menu__icon" alt="New Playlist" /> */}
              {list.name}
            </li>
          ))}
          <Modal show={modal.modal} close={handlePlus}>
            <form onSubmit={addNewPlaylist}>
              <div className="title">Create a New PlayList</div>
              <div className="content-wrap">
                <input
                  type="text"
                  value={nameList}
                  placeholder="Name list"
                  onChange={(e) => {
                    setNameList(e.target.value);
                  }}
                  required
                />
                <br />
                <button type="submit">create</button>
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
