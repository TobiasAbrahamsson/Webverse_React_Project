import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import AccountNav from '../AccountNav/AccountNav'
import PersonalInformation from '../PersonalInformation/PersonalInformation'
import Security from '../Security/Security'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

export default function Account() {
    return (
        <Router>
            <div>
                <Sidebar />
                <Header />
                <AccountNav />
                <Switch>
                    <Route path="/account/personal-information" component={PersonalInformation} />
                    <Route path="/account/security" component={Security} />
                </Switch>
            </div>
        </Router>
    )
}
