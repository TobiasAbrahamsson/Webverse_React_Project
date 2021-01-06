import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ProjectSidebar from '../components/ProjectSidebar/ProjectSidebar'
import Header from '../components/Header/Header'

const ProjectLayout = props => {
   return (
      <div>
         <Sidebar />
         <ProjectSidebar />
         <Header />
         <div className="main">
            {props.children}
         </div>
      </div>
   )
}

export default ProjectLayout