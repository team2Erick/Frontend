import React, { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Songs from '../pages/Songs/Songs';
import Albums from '../pages/Albums/Albums';
import Artists from '../pages/Artists/Artists';
import Favourite from '../pages/Favourite/Favourite';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import FinishSingUp from '../pages/FinishSingUp/FinishSingUp';

import './App.scss';

import Store, { stateData } from "../store"



const App = () => {

  const [state, setState] = useState(stateData);
  const value = {
    state, setState: data => {
      setState({
        ...state,
        ...data
      })
    }
  };

  return (
    <Store.Provider value={value}>
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
    </Store.Provider>
  );
};

export default App;
