import React, { createContext, useReducer } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
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

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Menu />
        {children}
        <Playbar />
      </Context.Provider>
    </>
  );
};

export default Layout;
