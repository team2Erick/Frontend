import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Songs from '../pages/Songs';
import Albums from '../pages/Albums';
import Artists from '../pages/Artists';
import Layout from '../components/Layout';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/songs" component={Songs} />
            <Route path="/albums" component={Albums} />
            <Route path="/artists" component={Artists} />
          </Switch>
        </Layout>
      )}/>
    </BrowserRouter>
  );
};

export default App;
