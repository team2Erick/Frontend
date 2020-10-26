import React from 'react';
import '../assets/styles/pages/Songs.scss';
import Tabla from '../components/Table/Table';
import MyDatos from '../pages/datos';

const Songs = () => {
  return (
    <section className="main songs">
      <Tabla title="Lista de Canciones" />
    </section>
  );
};

export default Songs;
