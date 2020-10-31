import React from 'react';
import './MusicItem.scss';

const MusicItem = ({ item, rounded }) => {
  if (!item.artist.name) return <></>;
  return (
    <div className={rounded ? 'music-item--rounded' : 'music-item'}>
      <div
        className={rounded ? 'music-item--rounded__image' : 'music-item__image'}
        style={{
          background: `url('${item.album.cover_medium}')`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="music-item__title">{item.title}</div>
      <div className="music-item__subtitle">{item.artist.name}</div>
    </div>
  );
};

export default MusicItem;
