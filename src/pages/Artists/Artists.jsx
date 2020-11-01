import React, {useContext, useEffect} from 'react';
import ArtistPlayList from '../../components/ArtistPlayList/ArtistPlayList';
import FilterArtist from '../../components/FilterArtist/FilterArtist';
import ScrollSlider from '../../components/ScrollSlider/ScrollSlider';
import MyDatos from '../Datos/datos';
import Layout from '../../components/Layout/Layout';
import './Artists.scss';

import api from '../../services/api';
import Store from '../../store';

const Artists = () => {
  const { state, setState } = useContext(Store);

  useEffect(async () => {
    const genreQuery = await api.get('/music/genre');
    setState('genre', { results: genreQuery.data.data });
  }, []);

  return (
    <Layout>
      <div className="container-Artist-hide-scroll">
        <div className="container-Artist-viewport">
          <div className="artists">
            <div className="container-artist">  
              <div className="ArtistPlayList">
                <ArtistPlayList />
              </div>
              <div className="FilterArtist">
                <FilterArtist />
              </div>
              <div className="ScrollSlider">
               {<ScrollSlider
                  title="Artist"
                  items={state.genre.results.songs}
                  rounded={true}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Artists;
