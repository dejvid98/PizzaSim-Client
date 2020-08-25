import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import NewOrder from './NewOrder/NewOrder';

function App() {
  return (
    <Switch>
      <Route exact={true} path='/' component={LandingPage} />
      <Route exact={true} path='/neworder' component={NewOrder} />
    </Switch>
  );
}

export default App;
