import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Layouts
import MainLayout from '../../layouts/MainLayout'
import LoginLayout from '../../layouts/LoginLayout'

// Components
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import Services from '../Services/Services'

import { AuthProvider } from '../../contexts/AuthContext'

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Switch>
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
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App