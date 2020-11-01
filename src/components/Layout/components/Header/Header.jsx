import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Burguer from '../../../../assets/images/icons/menu-burguer.svg';
import Search from '../../../../assets/images/icons/search.svg';
import Arrow from '../../../../assets/images/icons/arrow-left.svg';
import CloseInfo from '../../../../assets/images/icons/close.svg';
import Logo from '../../../../assets/images/icons/cday-n.svg';
import './Header.scss';

import SearchBarHandle from './SearchBarHandle';
import api from '../../../../services/api';

import Store from '../../../../store/index';

const Header = () => {
  const history = useHistory();

  useEffect(SearchBarHandle);

  const { state, setState } = useContext(Store);

  const [searchText, setSeachText] = useState('');

  useEffect(() => {
    api;
  }, [searchText]);

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

  return (
    <header className="container__header">
      <nav className="navbar" id="navbar">
        <div className="logoscroll" id="logoscroll" style={{ display: 'none' }}>
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
            {/* <Link to="/signup">Sign Up</Link>
            {!state.user && '' (
              ? <Link onClik={logout}>Logoout</Link>
              : <Link to="/login">Login</Link>
            )} */}
            {/* <div>
            </div>
            <div>
              {state.user.image && (
                <figure className="profile__container">
                  <img
                    className="profile__container--image"
                    src={state.user.image}
                    alt="perfil"
                  />
                </figure>
              )}
            </div> */}
          </div>
        </div>
      </nav>
      {/* <div className="userinfo inactive" id="usermodal">
        <button className="userinfo__closeinfo" id="closemodalinfo">
          <img src={CloseInfo} />
        </button>
        <h2>Mauricio Rodriguez</h2>
        <div className="userinfo__separator"></div>
        <h3>Cuenta premium</h3>
      </div> */}
    </header>
  );
};

export default Header;
