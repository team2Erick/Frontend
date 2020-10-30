import React from 'react';

export const stateData = {
  playlist: [],
  indexSong: 0,
  playlistTitle: '',
  isFavorite: false,
};

export default React.createContext({
  state: stateData,
  setState: () => {},
});
