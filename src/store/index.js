import React from 'react';
import Jwt_Decode from 'jwt-decode';

var user = {}

if (window.localStorage.getItem('cday_user')) {
  user = Jwt_Decode(window.localStorage.getItem('cday_user'))
  user = {
    ...user,
    id: user.sub
  };
}

console.log(user);

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
    id: [],
  },

  newPlaylist: {},

  playlists: {
    playlist: []
  }

};

export default React.createContext({
  state: stateData,
  setState: () => {},
});