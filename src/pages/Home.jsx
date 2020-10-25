import React from 'react';
import MainSlider from '../components/MainSlider';
/* import ScrollSlider from '../components/ScrollSlider'; */
import '../assets/styles/pages/Home.scss';
import Layout from '../components/Layout'

const Home = () => (
  <Layout>
  <main className="main">
    <MainSlider />
    {/* <ScrollSlider title="Featured Tracks" /> */}
  </main>
  </Layout>
);

export default Home;
