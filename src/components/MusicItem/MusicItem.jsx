import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Store from '../../store';
import api from '../../services/api';
import Successful from '../../components/Successful/Successful';
import './MusicItem.scss';
import Heart from '../../assets/images/icons/heart-solid.svg';
import HeartActive from '../../assets/images/icons/heart-active.svg';

const MusicItem = ({ item, rounded, album }) => {
  const { state, setState } = useContext(Store);
  const history = useHistory();
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [liked, setLiked] = useState(false);

  if (!item.artist || !item.artist.name) return <></>;

  const handleClick = async (value) => {
    if (!state.user.id) return history.push('/login');
    const FavouriteItem = await api.post(
      'usermusic/add-favorites/' + state.user.id,
      { favorites: value }
    );
    setMessage(FavouriteItem.data.data.System);
    setShowSuccess(true);
  };

  const HeartLike = liked ? HeartActive : Heart;

  return (
    <div>
      {showSuccess && (
        <Successful
          success={message}
          close={() => {
            setShowSuccess(false);
          }}
        />
      )}
      <div className={rounded ? 'music-item--rounded' : 'music-item'}>
        <img
          className={
            rounded ? 'music-item--rounded__image' : 'music-item__image'
          }
          src={album ? item.cover_medium : item.album.cover_medium}
          alt="rounded"
        />
      </div>
      <div className="music-item__title">{item.title}</div>
      <div className="music-item__subtitle">{item.artist.name}</div>
      {!album && (
        <button
          type="button"
          className="music-item__btn-fav"
          onClick={() => {
            handleClick(item.id);
            setLiked(!liked);
          }}
        >
          <span>
            <img src={HeartLike} alt="like" />
          </span>
          {/* <span aria-label="Fav-Gif" role="img">
          ❤️
          </span> */}
        </button>
      )}
    </div>
  );
};

export default MusicItem;
