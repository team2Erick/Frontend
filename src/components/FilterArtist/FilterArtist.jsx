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

  const handleSearch = async (genre) => {

    console.log(genre);
    const genreQuery = await api.get('music/genre', {
      params: {
        genre
      }
    });
    setState('genre', { results: genreQuery.data.data });
  };


  const filters = [
    {
      name: "Pop",
      id: 132
    },
    {
      name: "Rap/Hip Hop",
      id: 116
    },
    {
      name: "Reggaetón",
      id: 122
    },
    {
      name: "Musica de la india",
      id: 81
    },
    {
      name: "Rock",
      id: 152
    },
    {
      name: "Dance",
      id: 113
    },
    {
      name: "musica Brasileña",
      id: 75
    },
    {
      name: "R&B",
      id: 165
    },
    {
      name: "Alternativo",
      id: 85
    },
    {
      name: "Electro",
      id: 106
    },
    {
      name: "Música religiosa",
      id: 186
    },
    {
      name: "musica africana",
      id: 2
    },
    {
      name: "Latino",
      id: 197
    },
    {
      name: "Folk",
      id: 466
    },
    {
      name: "Reggae",
      id: 144
    },
    {
      name: "infantil",
      id: 95
    },
    {
      name: "cumbia",
      id: 71
    },
    {
      name: "Reggae",
      id: 144
    },
    {
      name: "Jazz",
      id: 129
    },
    {
      name: "blues",
      id: 153
    },
    {
      name: "Música tradicional mexicana",
      id: 65
    },
  ]

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
        {filters.map(genre => {
          return (<button
            key={genre.id}
            onClick={() => { handleSearch(genre) }}
            type="button"
          >
            {genre.name.toUpperCase()}
          </button>)
        })}
      </div>
    </div >
  );
};
export default FilterArtist;