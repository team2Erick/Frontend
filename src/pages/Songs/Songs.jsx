import React from 'react';
import './Songs.scss';
import Layout from '../../components/Layout/Layout';
import MyDatos from '../../pages/Datos/datos';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Tabla from '../../components/Table/Table';

const Songs = () => {
  return (
    <Layout>
      <div className="containers">
        <div className="container-songs">
          <section className="main songs">
            <ScrollSlider title="Feature Tracks" items={MyDatos} />
            <Tabla title="Lista de Canciones" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Songs;
