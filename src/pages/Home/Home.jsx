import React, { useEffect, useState } from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import MyDatos from '../../pages/Datos/datos';
import Sliders from '../../components/datos/Sliders';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import Layout from '../../components/Layout/Layout';
import './Home.scss';
import api from '../../services/api';
import Store from '../../store/index';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getHome();
  }, []);

  const getHome = async () => {
    const response = await api.get('music/discover');
    console.log(response.data.data);
    setSongs(response.data.data);
  };

  return (
    <Layout>
      {songs.length > 0 && (
        <main className="main">
          <MainSlider sliders={songs[0]} />
          <ScrollSlider title="Canciones" items={songs[1]} />
          <div className="main__table">
            <h1 className="main__title">Top Tracks</h1>
            <Table playlist={songs[2]} />
          </div>
        </main>
      )}
    </Layout>
  );
};

export default Home;
