import React, { useEffect, useState } from 'react';

import MainSlider from '../../components/MainSlider/MainSlider';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import Layout from '../../components/Layout/Layout';
import api from '../../services/api';

// import Store from '../../store';

import './Home.scss';

const Home = () => {
  const [songs, setSongs] = useState([]);

  const getHome = async () => {
    const response = await api.get('music/discover');
    // console.log(response.data.data);
    setSongs(response.data.data);
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <Layout>
      {songs.length > 0 ? (
        <main className="main">
          <MainSlider sliders={songs[0]} />
          <ScrollSlider title="Canciones" items={songs[1]} />
          <div className="main__table">
            <h1 className="main__title">Top Tracks</h1>
            <Table playlist={songs[2]} />
          </div>
        </main>
      ) : (
          <div className='center-item-full-screen' >Cargando...</div>
        )}
    </Layout>
  );
};

export default Home;
