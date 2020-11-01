import React, { useEffect, useState, useContext } from 'react';
import './ArtistPlayList.scss';
import PlayArtist from './PlayArtist';

const BackArtist = 'src/assets/images/ArtistPlayList/BackArtist.svg';
const imgProfile =
  'https://avatars3.githubusercontent.com/u/36718796?s=460&u=7367200d79d0e0263f27e8d21340dad5113cfadb&v=4';

import Store from '../../store/index';
import api from '../../services/api';

const ArtistPlayList = ({ artist }) => {
  const { state, setState } = useContext(Store);
  const [searchText, setSeachText] = useState('');

  useEffect(() => {
    api;
  }, [searchText]);

  const handleSearch = async (e) => {
    const searchQuery = await api.get('/music/search', {
      params: { search: e.target.value },
    });
    setState('artist', { results: searchQuery.data.data });
  };
  if (!artist) return <></>;
  return (
    <div className="artist-item">
      {artist.map((item) => {
        return (
          <div key={item.id} className="container">
            <div className="artist-item__imgen">
              <img
                className="artist-item__img"
                src={item.tracks[0].album.cover_big}
                alt=""
              />
            </div>
            <div className="artist-item__details">
              <div className="artist-profile">
                <img
                  className="artist-profile__image"
                  src={item.picture_small}
                  alt="perfil"
                />
              </div>
              <div className="artist-name__album">
                <div>{item.name}</div>
              </div>
              <div className="artist-name__followers">
                <div>
                  Followers
                  <br />
                  {item.fans}
                </div>
              </div>
              <div className="artist-name__songs">
                <div>
                  Albums
                  <br />
                  {item.nb_album}
                </div>
              </div>
              <div className="container-artist-play__list">
                <div className="artist-play__list">
                  <PlayArtist title={item.name} playlist={item.tracks} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistPlayList;
