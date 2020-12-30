import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar'

export default function Overview() {
    return (
        <div>
            <Sidebar />
            <ProjectSidebar />
            <Header />
            Översikt
        </div>
    )
}
