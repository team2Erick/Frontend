import React, { useEffect, useState } from 'react';
import './Albums.scss';
import MyDatos from '../../pages/Datos/datos';
import Layout from '../../components/Layout/Layout';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import Singer from '../../assets/images/singer.jpg';

import api from '../../services/api';

const Albums = () => {
  const [album, setAlbum] = useState([]);
  const [albumRamdom, setAlbumRamdom] = useState([]);
  const [albumPrimary, setAlbumPrimary] = useState({});

  useEffect(() => {
    async function fetchData() {
      const albumQuery = await api.get("/music/album");
      setAlbumPrimary(albumQuery.data.data.splice(0, 1)[0])
      setAlbumRamdom(albumQuery.data.data.sort(() => { return Math.random() - 0.5 }))
      console.log(albumRamdom[0])
    }
    fetchData()
  }, [])


  return (
    <Layout>
      {
        albumRamdom.length > 0 && (
          <section className="main albums">
            <ScrollSlider title="Featured Tracks" items={albumRamdom} album={true} />
            <div className="album">
              <div className="album__image">
                <h2>{albumPrimary.artist.name}</h2>
                <div className="album__image__contentimg">
                  <img src={albumPrimary.artist.picture_big} />
                </div>
              </div>
              <div className="album__table">
                <h4>// Album</h4>
                <h1>{albumPrimary.title}</h1>
                <h4>{albumPrimary.contributors.map(contributors => contributors.name).join(",")}</h4>
                <Table playlist={albumPrimary.tracks.data} dense={true} />
              </div>
            </div>
          </section>
        )
      }
    </Layout>
  );
};

export default Albums;
