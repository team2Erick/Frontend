import React from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
import ScrollSlider from '../components/ScrollSlider/ScrollSlider';
import '../assets/styles/pages/Home.scss';

const Home = () => (
  <main className="main">
    <MainSlider />
    <ScrollSlider title="Featured Tracks" items={musicList=5} />
  </main>
);

export default Home;
