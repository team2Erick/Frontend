import React, { useContext } from 'react';
import Tabla from '../components/Table/Table';
import '../assets/styles/pages/Songs.scss';

const Songs = () => {
  return (
    <section className="main songs">
      <Tabla title="Lista de Canciones" />
    </section>
  );
};

export default Songs;
