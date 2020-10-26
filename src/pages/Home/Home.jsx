import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import './Home.scss';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider'
import Table from '../../components/Table/Table'
import Layout from '../../components/Layout/Layout'

const Home = () => (
  <Layout>
  <main className="main">
    <MainSlider />
    <ScrollSlider title="Featured Tracks"/>
      <div className="main__table">
      <h1 className="main__title">Top Tracks</h1>
      <Table/>
    </div>
  </main>
  </Layout>
);

export default Home;
