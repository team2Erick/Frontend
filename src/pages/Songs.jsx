import React from 'react';
import '../assets/styles/pages/Songs.scss';
import Tabla from '../components/Table/Table';
import media from '../media.json';
import MyDatos from '../pages/datos';

const Songs = () => {
  return (
    <section className="main songs">
      <Tabla title="Lista de Canciones" />
      <ul>
        {MyDatos.map((list, id) => (
          <li key={id}>
            {list.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Songs;
