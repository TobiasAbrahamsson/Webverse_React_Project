import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

// Layouts
//import LoginLayout from "../../layouts/LoginLayout";
import MainLayout from "../../layouts/MainLayout";
import ProjectLayout from "../../layouts/ProjectLayout";

// Pages
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Account from "../../pages/Account/Account";
import Overview from "../../pages/Overview/Overview";
import Services from "../../pages/Services/Services";

// Components
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { AuthProvider } from "../../contexts/AuthContext";

function App() {
   return (
      <Router>
         <div>
            <AuthProvider>
               <Switch>

                  <Route path="/login" component={Login} />

                  <Route path="/:path?" exact>
                     <MainLayout>
                        <Switch>
                           <PrivateRoute exact path="/" component={Home} />
                           <PrivateRoute path="/account" component={Account} />
                        </Switch>
                     </MainLayout>
                  </Route>

                  <Route path="/:id/:path?" exact>
                     <ProjectLayout>
                        <Switch>
                           <PrivateRoute path="/:id/overview" component={Overview} />
                           <PrivateRoute exact path="/:id/services" component={Services} />
                           <PrivateRoute path="/:id/services/:filterType" component={Services} />
                        </Switch>
                     </ProjectLayout>
                  </Route>

               </Switch>
            </AuthProvider>
         </div>
      </Router>
   );
};

export default App;