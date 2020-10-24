import React from 'react';

const Menu = () => (
  <>
    <section className="container__menu">
      <figure>
        <img src="/src/assets/images/icon.svg" alt="icon" />
      </figure>
      <div className="menu">
        <ul className="menu__list">
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/discover.svg" alt="discover" />
            Discover
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/songs.svg" alt="Songs" />
            Songs
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/albums.svg" alt="Albums" />
            Albums
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/artists.svg" alt="Artists" />
            Artists
          </li>
        </ul>
      </div>
      <div>
        <h3>My Tracks</h3>
        <ul className="menu__list">
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/favourite.svg" alt="Favourite" />
            Favourite
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/history.svg" alt="Recent history" />
            Recent History
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/download.svg" alt="Download" />
            Download Items
          </li>
        </ul>
      </div>
      <div>
        <h3>PlayList</h3>
        <ul className="menu__list">
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/playlist.svg" alt="Playlist" />
            Bangla
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/playlist.svg" alt="Playlist" />
            English
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/playlist.svg" alt="Playlist" />
            My Style
          </li>
          <li>
            <img className="menu__list--icon" src="/src/assets/images/icons/playlist.svg" alt="Playlist" />
            Hindi
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Menu;