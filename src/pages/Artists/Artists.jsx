import React from 'react';
import ArtistPlayList from '../../components/ArtistPlayList/ArtistPlayList';
import FilterArtist from '../../components/FilterArtist/FilterArtist';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import MyDatos from '../Datos/datos';
import Layout from '../../components/Layout/Layout';
import './Artists.scss';
import Api from '../../services/api'

const Playlist = Api.data
/* const playList = [
  {
    image: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    song: '/src/components/HomeLayout/test.mp3',
    title: 'Nombre de la canción 1',
    artist: 'Nombre del artista 1',
  },
  {
    image: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    song: '/src/components/HomeLayout/test.mp3',
    title: 'Nombre de la canción 2',
    artist: 'Nombre del artista 2',
  },
  {
    image: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    song: '/src/components/HomeLayout/test.mp3',
    title: 'Nombre de la canción 3',
    artist: 'Nombre del artista 3',
  },
  {
    image: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    song: '/src/components/HomeLayout/test.mp3',
    title: 'Nombre de la canción 4',
    artist: 'Nombre del artista 4',
  },
  {
    image: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    song: '/src/components/HomeLayout/test.mp3',
    title: 'Nombre de la canción 5',
    artist: 'Nombre del artista 5',
  },
]; */

const Artists = () => (
  <Layout>
    <div className="container-Artist-hide-scroll">
      <div className="container-Artist-viewport">
        <div className="artists">
          <div className="container-artist">
            <div className="ArtistPlayList">
              <ArtistPlayList />
            </div>
            <div className="FilterArtist">
              <FilterArtist />
            </div>
            <div className="ScrollSlider">
              <ScrollSlider title="Artist" items={MyDatos} rounded={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Artists;
