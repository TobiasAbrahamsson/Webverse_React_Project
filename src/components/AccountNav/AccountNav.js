import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountNav() {
   return (
      <div className="accountNav">
         Account Nav
         <Link to="/account/personal-information"><li>Personlig information</li></Link>
         <Link to="/account/security"><li>Security</li></Link>
      </div>
   )
}
