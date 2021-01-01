import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'

import AccountNav from '../AccountNav/AccountNav'
import PersonalInformation from '../PersonalInformation/PersonalInformation'
import Security from '../Security/Security'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

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
