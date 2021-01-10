import React from 'react'
import {
   BrowserRouter as Router,
   Switch
} from 'react-router-dom'

import AccountNav from '../../components/AccountNav/AccountNav'
import PersonalInformation from '../../components/PersonalInformation/PersonalInformation'
import Security from '../../components/Security/Security'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import { useAuth } from '../../contexts/AuthContext'

export default function Account() {
   const { currentUser } = useAuth()
   return (
      <Router>
         <div>
            {currentUser.email}
            <AccountNav />
            <Switch>
               <PrivateRoute path="/personal-information" component={PersonalInformation} />
               <PrivateRoute path="/security" component={Security} />
            </Switch>
         </div>
      </Router>
   )
}
