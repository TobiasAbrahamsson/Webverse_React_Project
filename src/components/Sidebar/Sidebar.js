import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/"><li>Översikt</li></Link>
                <Link to="/services">Tjänster</Link>
            </ul>
        </div>
    )
}
