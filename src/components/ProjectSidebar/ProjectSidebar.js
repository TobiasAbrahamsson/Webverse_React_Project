import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectSidebar() {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/services">Tjänster</Link>
            </ul>
        </div>
    )
}