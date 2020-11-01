import React from 'react';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Tabla from '../../components/Table/Table';
import MyDatos from '../Datos/datos';
import Layout from '../../components/Layout/Layout';

const History = () => (
  <Layout>
    <div className="container-Artist-hide-scroll">
      <div className="container-Artist-viewport">
        <div className="artists">
          <div className="container-artist">
            <div className="ScrollSlider">
              <ScrollSlider title="Artist" items={MyDatos} rounded={true} />
            </div>
            <div className="FilterArtist">
              <Tabla title="Lista de Canciones" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default History;
