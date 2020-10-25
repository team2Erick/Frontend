import React from 'react';
import MusicItem from '../Musicitem/MusicItem';
import MusicList from '../datos/MusicList';

import './ScrollSlider.scss';

const ScrollSlider = ({ title }) => {
  return (
    <div className="scroll-container">
      <strong className="scroll-slider__title">{title}</strong>
      <div className="scroll-slider">
        {MusicList.map((item) => {
          return <MusicItem key={item} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ScrollSlider;
