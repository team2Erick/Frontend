import React from 'react';
import MainSlider from '../components/MainSlider/MainSlider';
import '../assets/styles/pages/Home.scss';

const Home = () => (
  <main className="main">
    <MainSlider />
    {/* <MusicItem items={5} />
    <ScrollSlider title="Featured Tracks" items={musicList} /> */}
  </main>
);

export default Home;
