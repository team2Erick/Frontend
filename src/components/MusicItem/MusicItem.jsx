import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Store from '../../store';
import './MusicItem.scss';
import Heart from '../../assets/images/icons/heart-solid.svg'
import HeartActive from '../../assets/images/icons/heart-active.svg'

const MusicItem = ({ item, rounded, album }) => {
  const { state, setState } = useContext(Store);
  const history = useHistory();

  if (!item.artist || !item.artist.name) return <></>;

  const handleClick = () => {
    if (!state.user.id) return history.push('/login');
    alert(state.user.id);
  };

  return (
    <div>
      <div className={rounded ? 'music-item--rounded' : 'music-item'}>
        <img
          className={rounded ? 'music-item--rounded__image' : 'music-item__image'}
          src={album ? item.cover_medium : item.album.cover_medium}
        />
      </div>
      <div>
        <button className="music-item__btn-fav" onClick={handleClick}>
          <img src={Heart}/>
        </button>
      </div>
      <div className="music-item__title">{item.title}</div>
      <div className="music-item__subtitle">{item.artist.name}</div>
    </div>
  );
};

export default MusicItem;
