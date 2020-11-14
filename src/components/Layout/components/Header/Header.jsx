import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import SearchBarHandle from './SearchBarHandle';

import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/Search.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import CloseInfo from '../../../../assets/images/icons/close.svg';
import Logo from '../../../../assets/images/icons/cday-n.svg';
import './Header.scss';

import api from '../../../../services/api';
import Store, { stateData } from '../../../../store/index';

const Header = () => {
  const history = useHistory();
  const { state, setState } = useContext(Store);
  const [searchText, setSeachText] = useState('');

  useEffect(SearchBarHandle);
  // useEffect(() => {
  //   api;
  // }, [searchText]);

  const handleSearch = async (value) => {
    const searchQuery = await api.get('music/search', {
      params: { search: value },
    });
    return searchQuery.data.data;
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const songs = await handleSearch(searchText);
    setState('search', {
      searchText,
      songs,
    });
    history.push('/songs');
  };

  const logout = useCallback(() => {
    // window.localStorage.removeItem('cday_user');
    localStorage.removeItem('cday_user');
    history.push('/');
    const deleteIdUser = { id: '' };
    setState('user', deleteIdUser);
    console.log(state);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
    console.log(state);
  };

  /* useEffect(() => {
    console.log(state);
  }, []); */

  return (
    <header className="container__header">
      <nav className="navbar" id="navbar">
        <div className="logoscroll inactiveEl" id="logoscroll">
          <img src={Logo} />
        </div>
        <div className="navbar__mobile-button">
          <button id="MobileMenu">
            <img src={Burguer} />
          </button>
        </div>
        <div className="navbar__search">
          <button id="searchbutton">
            <img src={Search} />
            <span>Search your entertaiment</span>
          </button>
          <div className="navbar__search__inputsearch inactive" id="searchbar">
            <button id="exitsearch">
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
          <div className="profile__container">
            {state.user.id ? (
              <>
                <ul className="profile__menu">
                  <li>
                    <div>
                      <figure className="profile__container--fig">
                        <img
                          className="profile__container--image"
                          src={state.user.image}
                          alt="perfil"
                        />
                      </figure>
                    </div>
                    <ul>
                      <li>
                        <span>{state.user.name}</span>
                      </li>
                      <li>
                        <a onClick={handleClick}>Logout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ) : (
                <>
                  <div className="singbutton">
                    <Link to="/signup">Sign Up</Link>
                  </div>
                  <div className="loginbutton">
                    <Link to="/login">Login</Link>
                  </div>
                </>
              )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
