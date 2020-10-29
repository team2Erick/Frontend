import React, {useContext} from 'react';
import MyDatos from '../Datos/datos';
import MusicItem from '../../components/MusicItem/MusicItem';
import Layout from '../../components/Layout/Layout';
import StaticContext from '../../context/StaticContext';

import './Favourite.scss';

const Favourite = () => {
  const context = useContext(StaticContext);
  console.log(context);
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
