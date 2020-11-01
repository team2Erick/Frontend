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

  artist: {
    name: '',
  },

  search: {
    searchText: '',
    songs: [],
  },

  genre: {
    results: [],
  },

  user: {
    
  },

  newPlaylist: {

  },
};

export default React.createContext({
  state: stateData,

  setState: () => {},
});
