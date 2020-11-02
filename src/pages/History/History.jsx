import React, { useContext, useEffect, useState } from 'react';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Table from '../../components/Table/Table';
import MyDatos from '../Datos/datos';
import Layout from '../../components/Layout/Layout';

import api from '../../services/api';
import Store from '../../store';

const History = () => {
  const { state, setState } = useContext(Store);

  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    const response = await api.get('music/history', {
      params: { user: state.user.id },
    });

    var data = response.data.data.map(item => {
      return item.song
    })

    setHistory(data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Layout>
      <div className="container-Artist-hide-scroll">
        <div className="container-Artist-viewport">
          <div className="artists">
            <div className="container-artist">
              <div className="FilterArtist">
                <Table title="Lista de Canciones" playlist={history} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
