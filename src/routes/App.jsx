import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Songs from '../pages/Songs';
import Albums from '../pages/Albums';
import Artists from '../pages/Artists';

import './App.scss';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/songs" component={Songs} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
      </Switch>
    </HashRouter>
  );
};

export default App;
