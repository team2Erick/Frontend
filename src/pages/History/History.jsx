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
  const [loading, setLoading] = useState([]);

  const getHist = async () => {
    setLoading(true)
    const response = await api.get('music/history', {
      params: { user: state.user.id },
    });

    const data = response.data.data.map((item) => {
      return item.song;
    });

    setLoading(false)
    setHist(data);
  };

  useEffect(() => {
    getHist();
  }, []);

  if (state.user.id) {
    if (!loading) {
      if (hist.length) {
        return (
          <Layout>
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
          </Layout>
        );
      } else {
        return (
          <Layout>
            <div className='center-item-full-screen' >
              <div style={{ textAlign: "center" }}>
                <p>No has escuchado suficiente música  todavía</p>
                <br />
                <button onClick={() => {
                  history.push('/')
                }} class="button">Descubrir</button>
              </div>
            </div>
          </Layout>
        )
      }

    } else {
      return (
        <Layout>
          <div className='center-item-full-screen' >Cargando...</div>
        </Layout>
      )
    }
  } else {
    history.push('/login')
  }



};

export default History;
