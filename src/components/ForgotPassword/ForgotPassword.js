import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Kolla din mail för vidare instruktioner")
        } catch {
            setError("Lösenordsåterställningen misslyckades")
        }

        setLoading(false)
    }

    return (
        <div>
            <h2>Nytt Lösenord</h2>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} required />
                <button disabled={loading} type="submit">Nytt lösenord</button>
            </form>
            <Link to="/login">Logga in</Link>
        </div>
    )
}