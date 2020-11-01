import React, { useEffect, useState, useContext } from 'react';
import './FilterArtist.scss';

import Store from '../../store/index';
import api from '../../services/api';

const FilterArtist = () => {
  const { state, setState } = useContext(Store);
  const [searchText, setSeachText] = useState('');

  useEffect(() => {
    api;
  }, [searchText]);

  const handleSearch = async (e) => {
    const searchQuery = await api.get('/music/search', {
      params: { search: e.target.value },
    });
    setState('genre', { results: searchQuery.data.data });
  };

  return (
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
        <input
          value="rock"
          onClick={handleSearch}
          type="button"
          placeholder="rock"
        />
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
};
export default FilterArtist;
