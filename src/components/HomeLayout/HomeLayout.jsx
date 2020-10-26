import React from 'react';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Player from '../Player/Player';
import ScrollSlider from "../ScrollSlider/ScrollSlider";

const playlist = [
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 1",
    artist: "Nombre del artista 1"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 2",
    artist: "Nombre del artista 2"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 3",
    artist: "Nombre del artista 3"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 4",
    artist: "Nombre del artista 4",
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 5",
    artist: "Nombre del artista 5"
  }
];

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* {children} */}
      <Menu />
      <Player playlist={playlist} />
    </>
  );
};

export default Layout;
