import React, { useState, useEffect } from 'react';
import sliders from '../datos/Sliders';
import './MainSlider.scss';

const MainSlider = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        return sliders.length < count + 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

  return (
    <div>
      {sliders.map((slider, index) => {
        if (count === index)
          return (
            <div className="main-slider"
              key={slider}
              style={{
              background: `url(${slider.image})`,
              backgroundSize: "cover"
              }}
            >
              <div className="main-slider__content">
                <span className="main-slider__subtitle">// TRENDING</span>
                <strong className="main-slider__title">{slider.title}</strong>
                <span className="main-slider__artist">-{slider.artist}</span>
                <div className="main-slider__buttons">
                  <div className="btn" style={{ marginRight: "10px" }}>PLAY</div>
                  <div className="btn">SHERE</div>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default MainSlider;
