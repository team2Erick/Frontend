import React, {useReducer} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Songs from '../pages/Songs/Songs';
import Albums from '../pages/Albums/Albums';
import Artists from '../pages/Artists/Artists';
import Favourite from '../pages/Favourite/Favourite';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import FinishSingUp from '../pages/FinishSingUp/FinishSingUp';
import StaticContext from '../context/StaticContext';

import './App.scss';

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

const App = () => {
  const [state, dispatch] = useReducer(reducer, StaticContext);

  return (
    <StaticContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/songs" component={Songs} />
          <Route path="/albums" component={Albums} />
          <Route path="/artists" component={Artists} />
          <Route path="/Favourite" component={Favourite} />
          <Route path="/singup" component={SingUp} />
          <Route path="/login" component={Login} />
          <Route path="/finishsingup" component={FinishSingUp} />
        </Switch>
      </HashRouter>
    </StaticContext.Provider>
  );
};

export default App;
