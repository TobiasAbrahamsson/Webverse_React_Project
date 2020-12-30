import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import AccountNav from '../AccountNav/AccountNav'
import PersonalInformation from '../PersonalInformation/PersonalInformation'
import Security from '../Security/Security'

export default function Account() {
    return (
        <Router>
            <div>
                <AccountNav />
                <Switch>
                    <Route path="/account/personal-information" component={PersonalInformation} />
                    <Route path="/account/security" component={Security} />
                </Switch>
            </div>
        </Router>
    )
}
