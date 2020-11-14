import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ArtistPlayList from '../../components/ArtistPlayList/ArtistPlayList';
import FilterArtist from '../../components/FilterArtist/FilterArtist';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import Layout from '../../components/Layout/Layout';
import './Artists.scss';

import api from '../../services/api';
import Store from '../../store';

const Artists = () => {
  const { state, setState } = useContext(Store);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      const genreQuery = await api.get('music/genre');
      setState('genre', { results: genreQuery.data.data });
    };
    fetch();
  }, []);

  return (
    <Layout>
      {state.user.id ? (
        state.genre.results.songs ? (
          <>
            <div className="container-Artist-hide-scroll">
              <div className="container-Artist-viewport">
                <div className="artists">
                  <div className="container-artist">
                    <div className="ArtistPlayList">
                      <ArtistPlayList artist={state.genre.results.artists} />
                    </div>
                    <div className="FilterArtist">
                      <FilterArtist />
                    </div>
                    <div className="ScrollSlider">

                      <ScrollSlider
                        title="Artist"
                        items={state.genre.results.songs}
                        rounded={true}
                      />
                    ) : (
                      <div className='center-item-full-screen' >Cargando...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
            <div className='center-item-full-screen' >Cargando...</div>
          )
      ) : (
          history.push('/login')
        )}
    </Layout>
  );
};

export default Artists;
