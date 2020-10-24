import React from 'react';

import '../assets/styles/components/MusicItem.scss';

const MusicItem = ({ item }) => {
  return (
    <div className="music-item">
      <div
        className="music-item__image"
        style={{ background: `url('${item.image}')`,
        backgroundSize: "cover" 
        }}
      >
      </div>
      <div className="music-item__title">{item.title}</div>
      <div className="music-item__subtitle">{item.subtitle}</div>
    </div>
  );
};

export default MusicItem