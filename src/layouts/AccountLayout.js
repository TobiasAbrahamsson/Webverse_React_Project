import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import AccountNav from '../components/AccountNav/AccountNav'

const AccountLayout = props => {
   return (
      <div>
         <Sidebar />
         <Header />
         <AccountNav />
         <div className="main">
            {props.children}
         </div>
      </div>
   )
}

export default AccountLayout