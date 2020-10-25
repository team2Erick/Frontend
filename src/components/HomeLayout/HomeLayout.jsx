import React, {useReducer, createContext} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Playbar from './components/Playbar/Playbar';

export const MyContext = createContext(null);
const DEFAULT_PLAYLIST = 'home';

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  newPlaylist: {
    /* rock: new Set(), */
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        newPlaylists: { ...state.newPlaylist, [action.newPlaylist]: new Set() },
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
      <MyContext.Provider value={{ state, dispatch }}>
        <Header />
        {children}
        <Menu />
        <Playbar />
      </MyContext.Provider>
    </>
  );
};

export default Layout;
