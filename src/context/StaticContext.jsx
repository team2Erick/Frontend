import React from 'react';
import media from '../media.json';

const DEFAULT_PLAYlIST = 'home';

const Context = React.createContext({
  currentPlaylist: DEFAULT_PLAYlIST,
  media,
  isFavorite: false,
  newPlaylist: {
    /* home: new Set(media.ids),
    Favoritos: new Set(),
    rock: new Set(), */
  },
});

export default Context;
