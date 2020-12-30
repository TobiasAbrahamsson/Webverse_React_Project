import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ProjectSidebar from '../components/ProjectSidebar/ProjectSidebar'
<<<<<<< HEAD
=======
import Header from '../components/Header/Header'
>>>>>>> b25f5c99104a0708e5f28c8cd5660fc0b812ad2f

const ProjectLayout = props => {
    return (
        <div>
            <Sidebar />
            <ProjectSidebar />
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

export default ProjectLayout