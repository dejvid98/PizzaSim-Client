import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <Switch>
      <Route exact={true} path='/' component={LandingPage} />
    </Switch>
  );
}

export default App;
