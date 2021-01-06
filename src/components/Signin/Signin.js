import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Signin() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const { signin } = useAuth()
   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e) {
      e.preventDefault()

      try {
         setError("")
         setLoading(true)
         await signin(emailRef.current.value, passwordRef.current.value)
         history.push("/")
      } catch {
         setError("Inloggningen misslyckades")
      }

      setLoading(false)
   }

   return (
      <div className="signin">
         <h2>Logga in</h2>
         {error && <p>{error}</p>}
         <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} required />
            <input type="password" ref={passwordRef} required />
            <button disabled={loading} type="submit">Logga in</button>
         </form>
      </div>
   )
}