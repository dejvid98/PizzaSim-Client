// Libraries imports
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Relative imports
import LandingPage from './LandingPage/LandingPage';
import NewOrder from './NewOrder/NewOrder';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import updateCookies from './Util/UpdateCookies';
import restoreState from './Util/RestoreState';
import store from './store/store';
import { updateLastLogin } from './store/userCart';

function App() {
  useEffect(() => {
    restoreState();
    updateCookies();

    const lastLoginUpdate = setInterval(() => {
      store.dispatch(
        updateLastLogin({ lastLogin: new Date().toLocaleString() })
      );
    }, 1000);

    return function cleanup() {
      clearInterval(lastLoginUpdate);
    };
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
