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
 * @param rounded bolean
 */

import React, { useContext } from 'react';

import MusicItem from '../MusicItem/MusicItem';
import './ScrollSlider.scss';
import Store from '../../store/index';

const ScrollSlider = ({ items, title, rounded, album }) => {
  const { state, setState } = useContext(Store);

  const setPlaylist = (index) => {
    let playlist = [];

    if (album) {
      items.forEach((element) => {
        console.log();
        element.tracks.data.forEach((el) => {
          playlist.push(el);
        });
      });
    } else {
      playlist = items;
    }

    setState('player', {
      playlist,
      title: title,
      index: index,
      play: true,
    });
  };
  return (
    <div>
      <strong className="scroll-slider__title">{title}</strong>
      <div className="scroll-slider">
        {items.map((item, index) => {
          return (
            <div
              onClick={() => {
                setPlaylist(index);
              }}
              key={index}
            >
              <MusicItem rounded={rounded} item={item} album={album} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollSlider;
