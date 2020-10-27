import React from 'react';
import '../assets/styles/pages/Songs.scss';
import Tabla from '../components/Table/Table';
import MyDatos from '../pages/datos';
import ScrollSlider from '../components/ScrollSlider/ScrollSlider';

const Songs = () => {
  return (
    <section className="main songs">
      <ScrollSlider title="Canciones" items={MyDatos} />
      <Tabla title="Lista de Canciones" />
    </section>
  );
};

export default Songs;
