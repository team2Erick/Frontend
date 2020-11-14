import React, { useState, useEffect, useContext } from 'react';
import sliders from '../datos/Sliders';
import './MainSlider.scss';

import PlayIcon from './img/play.svg';
import ShareIcon from './img/share.svg';

import Store from '../../store';

const MainSlider = ({ sliders }) => {
  sliders = sliders || [];

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return sliders.length < count + 2 ? 0 : count + 1;
      });
    }, 6000);
  }, []);

  const { state, setState } = useContext(Store);

  const setPlay = (index) => {
    console.log(index);
    setState("player", { playlist: [...sliders], index: index, play: true });
  };

  return (
    <div>
      {sliders.map((slider, index) => {
        if (count == index)
          return (
            <div
              className="main-slider"
              key={`main_slider_${index}`}
              style={{
                background: `url(${slider.album.cover_big})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="main-slider__content">
                <div className="main-slider__subtitle">// TRENDING</div>
                <div className="main-slider__title">{slider.title}</div>
                <div className="main-slider__artist">
                  -{slider.artist.name}
                </div>
                <div className="main-slider__buttons">
                  <div
                    onClick={() => {
                      setPlay(index);
                    }}
                    className="btn"
                    style={{ marginRight: '10px' }}
                  >
                    PLAY
                    <img src={PlayIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default MainSlider;
