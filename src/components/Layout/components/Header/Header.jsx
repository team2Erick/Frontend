import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import SearchBarHandle from './SearchBarHandle';

import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/search.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import CloseInfo from '../../../../assets/images/icons/close.svg';
import Logo from '../../../../assets/images/icons/cday-n.svg';

import api from '../../../../services/api';
import Store from '../../../../store/index';

import './Header.scss';

const imgProfile =
  'https://avatars0.githubusercontent.com/u/3347271?s=460&u=ee8da2edec3f538be118fefcab95badee62b18e1&v=4';

const Header = () => {
  const history = useHistory();

  useEffect(SearchBarHandle);

  const { state, setState } = useContext(Store);

  const [searchText, setSeachText] = useState('');

  useEffect(() => {
    api;
  }, [searchText]);

  const handleSearch = async (value) => {
    const searchQuery = await api.get('/music/search', {
      params: { search: value },
    });
    return searchQuery.data.data;
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const songs = await handleSearch(searchText);
    setState({
      search: {
        searchText,
        songs,
      },
    });
    history.push('/songs');
  };

  return (
    <header className="container__header">
      <nav className="navbar" id="navbar">
        <div className="logoscroll" id="logoscroll" style={{ display: 'none' }}>
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__mobile-button">
          <button id="MobileMenu">
            <img src={Burguer} alt="Menu" />
          </button>
        </div>
        <div className="navbar__search">
          <button type="button" id="searchbutton">
            <img src={Search} />
            <span>Search your entertaiment</span>
          </button>
          <div className="navbar__search__inputsearch inactive" id="searchbar">
            <button type="button" id="exitsearch">
              <img src={Arrow} />
            </button>
            <span>
              <form onSubmit={handleSearchSubmit} action="post">
                <input
                  value={searchText}
                  onChange={(e) => {
                    setSeachText(e.target.value);
                  }}
                  type="search"
                  placeholder="Search..."
                />
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
        <button className="userinfo__closeinfo" id="closemodalinfo">
          <img src={CloseInfo} />
        </button>
        <h2>Mauricio Rodriguez</h2>
        <div className="userinfo__separator"></div>
        <h3>Cuenta premium</h3>
      </div>
    </header>
  );
};

export default Header;
