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
import Store from "../../store";

import MusicItem from '../MusicItem/MusicItem';

import './ScrollSlider.scss';

const ScrollSlider = ({ items, title, rounded, album }) => {

  const { state, setState } = useContext(Store);

  const setPlaylist = (index) => {
    setState("player", {
      playlist: [...items],
      title: title,
      index: index,
      play: true
    })
  }
  return (
    <div>
      <strong className="scroll-slider__title">{title}</strong>
      <div className="scroll-slider">
        {items.map((item, index) => {
          return <div onClick={() => { setPlaylist(index) }} key={index}>
            <MusicItem rounded={rounded} item={item} album={album} /></div>;
        })}
      </div>
    </div>
  );
};

export default ScrollSlider;
