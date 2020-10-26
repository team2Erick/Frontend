import React from 'react';
import MusicItem from '../MusicItem/MusicItem';

import './ScrollSlider.scss';

const ScrollSlider = ({ items, title, rounded }) => {
  /**
   *  @param items: array [
   *      {
   *          title
   *          image,
   *          artist,
   *          song
   *      }
   * ]
   *
   * @param title: string
   */

  return (
    <div>
      <strong className="scroll-slider__title">{title}</strong>
      <div className="scroll-slider">
        {items.map((item, index) => {
          return <MusicItem rounded={rounded} key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ScrollSlider;
