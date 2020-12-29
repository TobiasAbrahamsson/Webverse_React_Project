import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import Services from '../Services/Services'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute path="/services" component={Services} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
