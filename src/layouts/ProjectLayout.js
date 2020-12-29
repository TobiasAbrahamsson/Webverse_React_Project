import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ProjectSidebar from '../components/ProjectSidebar/ProjectSidebar'

const ProjectLayout = props => {
    return (
        <div>
            <Sidebar />
            <ProjectSidebar />
            <div className="main">
                {props.children}
            </div>
        </div>
    )
}

export default ProjectLayout