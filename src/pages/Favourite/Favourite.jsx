import React, { useContext, useEffect, useState } from 'react';
import MyDatos from '../Datos/datos';
import MusicItem from '../../components/MusicItem/MusicItem';
import Layout from '../../components/Layout/Layout';
import Charts from '../../components/Charts/Charts';
import api from '../../services/api'
import Store from '../../store'

import Table from "../../components/Table/Table"

import './Favourite.scss';
import '../../components/Charts/charts.scss';

const Favourite = () => {

  const { state, setState } = useContext(Store)
  const [favoriteItems, setFavoriteItems] = useState([])

  const getFavorites = async () => {
    const response = await api.get("/usermusic/favorites/" + state.user.id)
    setFavoriteItems(response.data.data)
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <Layout>
      <section className="main Favourite">
        <div>
          <div className="container-favourite">
            <ul className="container-playlistFav">
              <Table playlist={favoriteItems} />
            </ul>
          </div>
        </div>
      </section>
      <Charts />
    </Layout>
  );
};

export default Favourite;
