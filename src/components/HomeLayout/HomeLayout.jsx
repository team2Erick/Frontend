import React, { createContext, useReducer } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
<<<<<<< HEAD
import Playbar from './components/Playbar/Playbar';
import media from '../../media.json';

export const Context = createContext(null);
const DEFAULT_PLAYLIST = 'home';

const initialState = {
  media,
  currentPlaylist: DEFAULT_PLAYLIST,
  newPlaylist: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        newPlaylist: { ...state.newPlaylist, [action.newPlaylist]: new Set() },
      };
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.newPlaylist };
    default:
      break;
  }
  return state;
};

const Layout = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
=======
import Player from '../Player/Player';
import ScrollSlider from "../ScrollSlider/ScrollSlider"

const playlist = [
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 1",
    artist: "Nombre del artista 1"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 2",
    artist: "Nombre del artista 2"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 3",
    artist: "Nombre del artista 3"
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 4",
    artist: "Nombre del artista 4",
  },
  {
    image: "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    song: "/src/components/HomeLayout/test.mp3",
    title: "Nombre de la canción 5",
    artist: "Nombre del artista 5"
  }
]
>>>>>>> develop

  return (
    <>
<<<<<<< HEAD
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Menu />
        {children}
        <Playbar />
      </Context.Provider>
=======
      <Header />
      <ScrollSlider title="test" items={playlist} />

      {/* {children} */}
      <Menu />
      <Player playlist={playlist} />


>>>>>>> develop
    </>
  );
};

export default Layout;
