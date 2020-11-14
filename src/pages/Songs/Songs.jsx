import React, { useEffect, useContext } from 'react';

import Layout from '../../components/Layout/Layout';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';

import Store from '../../store';

import './Songs.scss';

const Songs = () => {
  const { state, setState } = useContext(Store);

  const setSongs = () => {
    let songs = [...state.search.songs];

    let sliderSongs;
    let tableSongs;
    let sliderSongsPercent;

    if (songs.length > 7) {
      sliderSongsPercent = songs.length * 0.4;
      sliderSongs = songs.splice(0, parseInt(sliderSongsPercent));
      tableSongs = songs;
    } else {
      sliderSongs = songs;
      tableSongs = [];
    }
    // console.log(sliderSongs);
    // console.log(tableSongs);
    return { sliderSongs, tableSongs };
  };

  const { sliderSongs, tableSongs } = setSongs();

  return (
    <Layout>
      <div className="containers">
        <div className="container-songs">
          <section className="main songs">
            <ScrollSlider title="Feature Tracks" items={sliderSongs} />
            <Table title="Lista de Canciones" playlist={tableSongs} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Songs;
