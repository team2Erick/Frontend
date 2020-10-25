import React from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
/* import ScrollSlider from '../components/ScrollSlider'; */
import '../assets/styles/pages/Home.scss';

const Home = () => (
  <main className="main">
    <MainSlider />
    {/* <ScrollSlider title="Featured Tracks" /> */}
  </main>
);

export default Home;
