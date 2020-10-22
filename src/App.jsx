import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './assets/styles/styles.scss';
import Layout from './views/Layout';
import Home from './views/Home/Home';
import Auth from "./views/Auth/Auth";

const App = () => (
  <HashRouter >
    <Switch>
      <Route path='/home'>
        <Layout>

          <Home />

        </Layout>
      </Route>
      {/* <Route exact path='/' component={Auth} /> */}
    </Switch>
  </HashRouter >
);

export default App;
