import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// Layouts
import MainLayout from '../../layouts/MainLayout'
//import LoginLayout from '../../layouts/LoginLayout'
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
<<<<<<< HEAD
    return (
        <Router>
            <div>
                <AuthProvider>
                    <Switch>

                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute exact path="/account" component={Account} />

                        <PrivateRoute exact path="/:id/overview" component={Overview} />
                        <PrivateRoute exact path="/:id/services" component={Services} />

                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />

                    </Switch>
                </AuthProvider>
            </div>
        </Router>
    );
=======
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
              <ProjectLayout>
                <Switch>
                  <PrivateRoute path="/:id/overview" component={Overview} />
                  <PrivateRoute path="/:id/services" component={Services} />
                </Switch>
              </ProjectLayout>
            </Route>

          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
>>>>>>> 6fc74e1837b7d1cd518f26886c90a1cb43e702c7
}

export default App