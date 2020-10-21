import React from 'react';

import Header from './Header';
import Menu from './Menu';
import MainSlider from './MainSlider/MainSlider';

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

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <MainSlider sliders={sliders} />
    </>
  );
}

export default Layout;