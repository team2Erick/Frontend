import React from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
import HomeLayout from '../components/HomeLayout/HomeLayout';
/* import ScrollSlider from '../components/ScrollSlider'; */
import '../assets/styles/pages/Home.scss';

const Home = () => (
  <HomeLayout>
    <main className="main">
      <MainSlider />
      {/* <ScrollSlider title="Featured Tracks" /> */}
    </main>
  </HomeLayout>
);

export default Home;
