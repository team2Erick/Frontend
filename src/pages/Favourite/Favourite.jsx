import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table/Table';
import Layout from '../../components/Layout/Layout';

import api from '../../services/api';
import Store from '../../store';

// import './Favourite.scss';

const Favourite = () => {
  const { state, setState } = useContext(Store);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const history = useHistory();

  const getFavorites = async () => {
    const response = await api.get('usermusic/favorites/' + state.user.id);
    setFavoriteItems(response.data.data);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Layout>
      {state.user.id ? (
        favoriteItems.length ?
          (<>
            <section className="main Favourite">
              <div>
                <div className="container-favourite">
                  <div className="main__table">
                    <Table title="Favorite" playlist={favoriteItems} />
                  </div>
                </div>
              </div>
            </section>
          </>) :
          (
            <div className='center-item-full-screen' >Cargando...</div>
          )
      ) : (
          history.push('/login')
        )}
    </Layout>
  );
};

export default Favourite;
