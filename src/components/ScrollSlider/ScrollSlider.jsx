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
      let newPlaylist = items[index].tracks.data.map(track => {
        let newTrack = track
        newTrack.cover_medium = items[index].cover_medium
        newTrack.cover_small = items[index].cover_small
        return newTrack
      })

      playlist = newPlaylist
    } else {
      playlist = items;
    }

    setState('player', {
      playlist,
      title: title,
      index: 0,
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
