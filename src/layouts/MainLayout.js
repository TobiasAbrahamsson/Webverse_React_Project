import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

const MainLayout = props => {
   return (
      <div>
         <Sidebar />
         <Header />
         <div className="main">
            {props.children}
         </div>
      </div>
   )
}

export default MainLayout