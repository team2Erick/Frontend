import React, { useEffect, useState, useContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Songs from '../pages/Songs/Songs';
import Albums from '../pages/Albums/Albums';
import Artists from '../pages/Artists/Artists';
import Favourite from '../pages/Favourite/Favourite';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import FinishSingUp from '../pages/FinishSingUp/FinishSingUp';
import NotFound from '../pages/NotFound/NotFound';
import Charts from '../components/Charts/Charts';
import History from '../pages/History/History';
import Player from '../components/Layout/components/Player/Player';

import './App.scss';

import Store, { stateData } from '../store';

const App = () => {

  // const [state, setState] = useState(stateData);
  const { state, setState } = useContext(Store);

  const value = {

    state,

    setState: (module, data) => {
      var newState = { ...state };

      newState[module] = { ...state[module], ...data };

      setState({
        ...newState,
      });

    },
  };

  useEffect(() => {
    if (localStorage.getItem('cday_user')) {

      setState("user", JSON.parse(localStorage.getItem('cday_user')));

    }
  }, [])

  return (
    <Store.Provider value={value}>
      <Player />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/artists" component={Artists} />
          <Route exact path="/Favourite" component={Favourite} />
          <Route exact path="/signup" component={SingUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/finishsingup" component={FinishSingUp} />
          <Route exact path="/History" component={History} />
          <Route exact path="/charts" component={Charts} />
          <Route exact path="/charts" component={Charts} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Store.Provider>
  );
};

export default App;
