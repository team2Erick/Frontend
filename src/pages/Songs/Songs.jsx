import React, { useContext } from 'react';
import './Songs.scss';
import Layout from '../../components/Layout/Layout';
// import MyDatos from '../../pages/Datos/datos';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';

import Store from '../../store';

const Songs = () => {
  const { state, setState } = useContext(Store);
  const songs = state.search.songs;

  const sliderSongsPercent = songs.length * 0.4;
  const tableSongsPercent = songs.length * 0.6;

  const sliderSongs = songs.splice(0, parseInt(sliderSongsPercent));
  const tableSongs = songs;

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
