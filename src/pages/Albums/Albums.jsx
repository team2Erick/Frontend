import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Albums.scss';
import MyDatos from '../../pages/Datos/datos';
import Layout from '../../components/Layout/Layout';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import Singer from '../../assets/images/singer.jpg';
import Store from '../../store';

import api from '../../services/api';

const Albums = () => {
  const [album, setAlbum] = useState([]);
  const [albumRamdom, setAlbumRamdom] = useState([]);
  const [albumPrimary, setAlbumPrimary] = useState({});
  const { state, setState } = useContext(Store);
  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const albumQuery = await api.get('/music/album');
      var albums = albumQuery.data.data.sort(() => {
        return Math.random() - 0.5;
      })
      setAlbumPrimary(albums.splice(0, 1)[0]);
      setAlbumRamdom(
        albums
      );
      console.log(albumRamdom[0]);
    }
    if (mounted) {
      fetchData();
    }
    return () => (mounted = false);
  }, []);

  const buildSongsToTable = (items) => {
    let newPlaylist = items.tracks.data.map(track => {
      let newTrack = track
      newTrack.cover_medium = items.cover_medium
      newTrack.cover_small = items.cover_small
      return newTrack
    })

    return newPlaylist
  }

  return (
    <Layout>
      {state.user.id ? (
        <>
          {albumRamdom.length > 0 ? (
            <section className="main albums">
              <ScrollSlider
                title="Featured Tracks"
                items={albumRamdom}
                album={true}
              />
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
                  <h4>
                    {albumPrimary.contributors
                      .map((contributors) => contributors.name)
                      .join(',')}
                  </h4>
                  <Table
                    playlist={buildSongsToTable(albumPrimary)}
                    hideImage={true}
                    album={true}
                  />
                </div>
              </div>
            </section>
          ) : (
              <div className='center-item-full-screen' >Cargando...</div>
            )}
        </>
      ) : (
          history.push('/login')
        )
      }
    </Layout >
  );
};

export default Albums;
