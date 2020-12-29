import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Layouts
import MainLayout from '../../layouts/MainLayout'
import LoginLayout from '../../layouts/LoginLayout'
import ProjectLayout from '../../layouts/ProjectLayout'

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
            <Route exact path="/" render={() => (
              <MainLayout>
                <Dashboard />
              </MainLayout>
            )} />
            <Route exact path="/account" render={() => (
              <MainLayout>
                <Account />
              </MainLayout>
            )} />

            <Route exact path="/:id/overview" render={() => (
              <ProjectLayout>
                <Overview />
              </ProjectLayout>
            )} />
            <Route path="/:id/services" render={() => (
              <ProjectLayout>
                <Services />
              </ProjectLayout>
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