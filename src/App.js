// Libraries imports
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Relative imports
import LandingPage from './LandingPage/LandingPage';
import NewOrder from './NewOrder/NewOrder';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import updateCookies from './Util/UpdateCookies';

function App() {
  useEffect(() => {
    updateCookies();
  });
  return (
    <Switch>
      <Route exact={true} path='/' component={LandingPage} />
      <Route exact={true} path='/neworder' component={NewOrder} />
      <Route exact={true} path='/admin' component={AdminDashboard} />
    </Switch>
  );
}

export default App;
