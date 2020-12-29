import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.pushState("/")
        } catch {
            setError("Utloggningen misslyckades")
        }
    }

    return (
        <div>
            <Sidebar />
            <h2>Profil</h2>
            {error && <p>{error}</p>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile">Update Profile</Link>
            <button onClick={handleLogout}>Logga ut</button>
        </div>
    )
}