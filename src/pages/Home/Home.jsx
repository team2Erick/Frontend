import React, {useContext} from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import MyDatos from '../../pages/Datos/datos';
import Sliders from '../../components/datos/Sliders';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import Layout from '../../components/Layout/Layout';
import StaticContext from '../../context/StaticContext';
import './Home.scss';

const Home = () => {
  const context = useContext(StaticContext);
  console.log(context);
  return (
    <Layout>
      <main className="main">
        <MainSlider sliders={Sliders} />
        <ScrollSlider title="Canciones" items={MyDatos} />
        <div className="main__table">
          <h1 className="main__title">Top Tracks</h1>
          <Table title="Tabla" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
