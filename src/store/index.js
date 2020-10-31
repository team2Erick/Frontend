import React from 'react'

export const stateData = {
    playlist: [],
    indexSong: 0,
    playlistTitle: "",

    search: {
        searchText: "",
        songs: []
    }

}

export default React.createContext({

    state: stateData,

    setState: () => {}

})