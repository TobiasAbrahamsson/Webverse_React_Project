import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/"><li>Webbsidor</li></Link>
            </ul>
        </div>
    )
}
