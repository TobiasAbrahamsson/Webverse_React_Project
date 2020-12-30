import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            Sidebar
            <br/>
            <Link to="/">Webbsidor</Link>
        </div>
    )
}
