import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table/Table';
import Layout from '../../components/Layout/Layout';

import api from '../../services/api';
import Store from '../../store';

const History = () => {
  const { state, setState } = useContext(Store);
  const history = useHistory();
  const [hist, setHist] = useState([]);

  const getHist = async () => {
    const response = await api.get('music/history', {
      params: { user: state.user.id },
    });

    const data = response.data.data.map((item) => {
      return item.song;
    });

    setHist(data);
  };

  useEffect(() => {
    getHist();
  }, []);

  return (
    <Layout>
      {state.user.id ? (
        <>
          <div className="container-Artist-hide-scroll">
            <div className="container-Artist-viewport">
              <div className="artists">
                <div className="container-artist">
                  <div className="FilterArtist">
                    <Table title="Lista de Canciones" playlist={hist} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        history.push('/login')
      )}
    </Layout>
  );
};

export default History;
