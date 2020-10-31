import React from 'react';

export const stateData = {
  player: {
    playlist: [],
    index: 0,
    title: '',
    audio: null,
    play: false,
    currentTime: 0,
  },

  search: {
    searchText: '',
    songs: [],
  },
};

export default React.createContext({
  state: stateData,
  setState: () => {},
});
