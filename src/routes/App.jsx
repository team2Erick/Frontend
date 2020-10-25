import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Songs from '../pages/Songs';
import Albums from '../pages/Albums';
import Artists from '../pages/Artists';
import Login from '../pages/Login'
import SingUp from '../pages/SingUp'
import FinishSingUp from '../pages/FinishSingUp'

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/songs" component={Songs} />
          <Route path="/albums" component={Albums} />
          <Route path="/artists" component={Artists} />
          <Route path="/singup" component={SingUp} />
          <Route path="/login" component={Login} />
          <Route path="/finishsingup" component={FinishSingUp} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
