import React from 'react';

import Header from './Header';
import Menu from './Menu';
import MainSlider from '../components/MainSlider/MainSlider';
import MusicItem from '../components/MusicItem/MusicItem';
import ScrollSlider from '../components/ScrollSlider/ScrollSlider';
import Table from '../components/Table/Table';

const sliders = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    title: "UNO",
    artist: "Mushi"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "DOS",
    artist: "Mushi"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "TRES",
    artist: "Mushi"
  }
]

const musicList = [
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  },
  {
    image: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png",
    title: "Esta es una canción",
    subtitle: "Artista"
  }
]

const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <Header /> */}
      {/* <Menu /> */}
      {/* <MusicItem item={musicList[0]} /> */}
      {/* <br /> */}
      {/* <ScrollSlider title="Featured Tracks" items={musicList} /> */}
      {/* <Table /> */}
      {/* <MainSlider sliders={sliders} /> */}
    </>
  );
}

export default Layout;