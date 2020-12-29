import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function AccountMenu() {
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
        <div className="accountMenu">
            Account Menu
            <br/>
            {error && <p>{error}</p>}
            {currentUser.email}
            <Link to="/account"><li>Account</li></Link>
            <Link to="/account/personal-information"><li>Personlig information</li></Link>
            <button onClick={handleLogout}>Logga ut</button>
        </div>
    )
}
