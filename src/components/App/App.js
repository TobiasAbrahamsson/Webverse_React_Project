import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Layouts
<<<<<<< HEAD
import MainLayout from '../../layouts/MainLayout'
import LoginLayout from '../../layouts/LoginLayout'
=======
//import MainLayout from '../../layouts/MainLayout'
//import LoginLayout from '../../layouts/LoginLayout'
//import ProjectLayout from '../../layouts/ProjectLayout'
>>>>>>> b25f5c99104a0708e5f28c8cd5660fc0b812ad2f

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
<<<<<<< HEAD
            <PrivateRoute exact path="/" render={() => (
              <MainLayout>
                <Dashboard />
              </MainLayout>
            )} />
            <PrivateRoute path="/update-profile" render={() => (
              <MainLayout>
                <UpdateProfile />
              </MainLayout>
            )} />
            <PrivateRoute path="/services" render={() => (
              <MainLayout>
                <Services />
              </MainLayout>
            )} />

            <Route path="/login" render={() => (
              <LoginLayout>
                <Login />
              </LoginLayout>
            )} />
            <Route path="/forgot-password" render={() => (
              <LoginLayout>
                <ForgotPassword />
              </LoginLayout>
            )} />
=======

            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/account" component={Account} />

            <PrivateRoute exact path="/:id/overview" component={Overview} />
            <PrivateRoute exact path="/:id/services" component={Services} />

            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            
>>>>>>> b25f5c99104a0708e5f28c8cd5660fc0b812ad2f
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App