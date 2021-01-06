import React from 'react'
import {
   BrowserRouter as Router,
   Switch
} from 'react-router-dom'

import AccountNav from '../../components/AccountNav/AccountNav'
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation'
import Security from '../../components/Security/Security'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'

export default function Account() {
   return (
      <Router>
         <div>
            <AccountNav />
            <Switch>
               <PrivateRoute path="/account/personal-information" component={PersonalInformation} />
               <PrivateRoute path="/account/security" component={Security} />
            </Switch>
         </div>
      </Router>
   )
}
