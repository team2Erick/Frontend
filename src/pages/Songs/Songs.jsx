import React, { useContext } from 'react';
import './Songs.scss';
import Layout from '../../components/Layout/Layout';
import MyDatos from '../../pages/Datos/datos';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Tabla from '../../components/Table/Table';
import StaticContext from '../../context/StaticContext';

const Songs = () => {
  const context = useContext(StaticContext);
  console.log(context);

  return (
    <Layout>
      <section className="main songs">
        <ScrollSlider title="Feature Tracks" items={MyDatos} />
        <Tabla title="Lista de Canciones" />
      </section>
    </Layout>
  );
};

export default Songs;
