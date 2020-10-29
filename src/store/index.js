import React from 'react'

export const stateData = {
    playlist: [{}],
    indexSong: 0,
}

export default React.createContext({

    state: stateData,

    setState: () => {}

})