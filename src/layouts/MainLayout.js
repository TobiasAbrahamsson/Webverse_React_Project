import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
<<<<<<< HEAD
// import Header from '../components/Header/Header'
=======
import Header from '../components/Header/Header'
>>>>>>> b25f5c99104a0708e5f28c8cd5660fc0b812ad2f

const MainLayout = props => {
    return (
        <div>
            <Sidebar />
<<<<<<< HEAD
=======
            <Header />
>>>>>>> b25f5c99104a0708e5f28c8cd5660fc0b812ad2f
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout