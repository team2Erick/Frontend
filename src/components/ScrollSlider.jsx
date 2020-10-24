import React from 'react';
import MusicItem from './MusicItem';
import MusicList from './datos/MusicList';

import '../assets/styles/components/ScrollSlider.scss';

const ScrollSlider = ({ title }) => {
  return (
    <div>
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
