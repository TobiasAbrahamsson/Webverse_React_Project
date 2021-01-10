import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

// Layouts
import LoginLayout from "../../layouts/LoginLayout";
import MainLayout from "../../layouts/MainLayout";
import ProjectLayout from "../../layouts/ProjectLayout";
import AccountLayout from "../../layouts/AccountLayout";

// Pages
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Overview from "../../pages/Overview/Overview";
import Services from "../../pages/Services/Services";
import Page404 from "../../pages/Page404/Page404"

// Components
//import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { AuthProvider } from "../../contexts/AuthContext";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import Security from "../Security/Security";

function App() {
   return (
      <Router>
         <div>
            <AuthProvider>
               <Switch>

                  {/* === Login layout === */}
                  <Route exact path="/login" render={() => (
                     <LoginLayout>
                        <Login />
                     </LoginLayout>
                  )} />

                  {/* === Main layout === */}
                  <Route exact path="/" render={() => (
                     <MainLayout>
                        <Home />
                     </MainLayout>
                  )} />

                  {/* === Account layout === */}
                  <Route exact path="/account/personal-information" render={() => (
                     <AccountLayout>
                        <PersonalInformation />
                     </AccountLayout>
                  )} />
                  <Route exact path="/account/security" render={() => (
                     <AccountLayout>
                        <Security />
                     </AccountLayout>
                  )} />

                  {/* === Project layout === */}
                  <Route exact path="/:id/overview" render={() => (
                     <ProjectLayout>
                        <Overview />
                     </ProjectLayout>
                  )} />
                  <Route exact path="/:id/services" render={() => (
                     <ProjectLayout>
                        <Services />
                     </ProjectLayout>
                  )} />

                  <Route render={() => (
                     <Page404 />
                  )} />

               </Switch>
            </AuthProvider>
         </div>
      </Router>
   );
};

export default App;