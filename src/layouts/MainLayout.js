import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = props => {
    return (
        <div>
            <Sidebar />
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout