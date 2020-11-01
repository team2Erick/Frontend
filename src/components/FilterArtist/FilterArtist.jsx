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
        <button
          value="rock"
          onClick={handleSearch}
          type="button"
          placeholder="rock"
        >
          Rock
        </button>
        <button
          value="Blues"
          onClick={handleSearch}
          type="button"
          placeholder="Blues"
        >
          Blues
        </button>
        <button>Blues</button>
        <button>Classical</button>
        <button>Country</button>
        <button>Dance</button>
        <button>Electronic</button>
        <button>Hip-hop</button>
        <button>Jazz</button>
        <button>Latin</button>
        <button>Metal</button>
        <button>Party</button>
        <button>R&B / Sould</button>
        <button>Reggae / Dancehall</button>
        <button>Soundtracks</button>
        <button>World</button>
      </div>
    </div>
  );
};
export default FilterArtist;
