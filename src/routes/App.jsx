import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Songs from '../pages/Songs/Songs';
import Albums from '../pages/Albums/Albums';
import Artists from '../pages/Artists/Artists';
import Login from '../pages/Login/Login';
import SingUp from '../pages/SingUp/SingUp';
import FinishSingUp from '../pages/FinishSingUp/FinishSingUp';

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
