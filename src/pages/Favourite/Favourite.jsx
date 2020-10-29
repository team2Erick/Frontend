import React from 'react';
import MyDatos from '../Datos/datos';
import MusicItem from '../../components/MusicItem/MusicItem';
import Layout from '../../components/Layout/Layout';

import './Favourite.scss';

const Favourite = () => {
  return (
    <Layout>
      <section className="main Favourite">
        <div>
          <div className="container-favourite">
            <ul className="container-playlistFav">
              {MyDatos.map((item, index) => {
                return (
                  <li className="container-playlist__item">
                    <MusicItem rounded={true} key={index} item={item} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Favourite;
