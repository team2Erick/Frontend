import React from 'react';
import './FilterArtist.scss';

const FilterArtist = () => (
  <div className="filter-container">
    <div className="filter-container__title">
      <div>
        <h1>Filter Artist</h1>
      </div>
      <div className="filter-container__spacetime">
        <div>week</div>
        <div>Month</div>
        <div>Party</div>
      </div>
    </div>
    <div className="filter-container__gender">
      <div>Blues</div>
      <div>Classical</div>
      <div>Country</div>
      <div>Dance</div>
      <div>Electronic</div>
      <div>Hip-hop</div>
      <div>Jazz</div>
      <div>Latin</div>
      <div>Metal</div>
      <div>Party</div>
      <div>R&B / Sould</div>
      <div>Reggae / Dancehall</div>
      <div>Soundtracks</div>
      <div>World</div>
    </div>
  </div>
);

export default FilterArtist;
