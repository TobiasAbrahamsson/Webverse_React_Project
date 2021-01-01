import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Layouts
import MainLayout from '../../layouts/MainLayout'
//import LoginLayout from '../../layouts/LoginLayout'
//import ProjectLayout from '../../layouts/ProjectLayout'

// Components
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import Services from '../Services/Services'
import Account from '../Account/Account'
import Overview from '../Overview/Overview'

import { AuthProvider } from '../../contexts/AuthContext'

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Switch>

            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />

            <Route path='/:path?' exact>
              <MainLayout>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/account" component={Account} />
                </Switch>
              </MainLayout>
            </Route>

            <Route path='/:id/:path?' exact>
              <MainLayout>
                <Switch>
                  <PrivateRoute path="/:id/overview" component={Overview} />
                  <PrivateRoute path="/:id/services" component={Services} />
                </Switch>
              </MainLayout>
            </Route>

          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App