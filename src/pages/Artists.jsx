import React from 'react';
import ArtistPlayList from '../components/ArtistPlayList';
import '../assets/styles/pages/Artists.scss';

const Artists = () => (
  <section className="main artists">
    <div className="ArtistPlayList">
      <ArtistPlayList />
    </div>
  </section>
);

export default Artists;
