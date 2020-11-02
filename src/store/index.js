import React from 'react';

const user = localStorage.getItem("cday_user") ? JSON.parse(localStorage.getItem("cday_user")) : {}
console.log(localStorage.getItem("cday_user"));
console.log(JSON.parse(localStorage.getItem("cday_user")));
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

  user,
 
 favorites: {
        id : []
    },
    newPlaylist: {

  },
};

export default React.createContext({
  state: stateData,
  setState: () => { },
});
