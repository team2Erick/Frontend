import React from 'react'

export const stateData = {
    playlist: [],
    indexSong: 0,
    playlistTitle: "",

}

export default React.createContext({

    state: stateData,

    setState: () => {}

})