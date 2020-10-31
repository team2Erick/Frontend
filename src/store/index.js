import React from 'react';

export const stateData = {
  playlist: [],
  indexSong: 0,
  playlistTitle: '',
<<<<<<< HEAD
  isFavorite: false,
};

=======

  search: {
    searchText: '',
    songs: [],
  },
};

>>>>>>> develop
export default React.createContext({
  state: stateData,
  setState: () => {},
});
