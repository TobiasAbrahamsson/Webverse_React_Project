import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Security() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const { currentUser, updatePassword, updateEmail } = useAuth()
   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   function handleSubmit(e) {
      e.preventDefault()

      // Kollar så att lösenorder inte är olika.
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
         return setError("Lösenorden matchar inte")
      }

      const promises = []
      setLoading(true)
      setError("")

      // Kollar så att den nya mailen inte är den samma som den nuvarnade.
      if (emailRef.current.value !== currentUser.email) {
         promises.push(updateEmail(emailRef.current.value))
      }

      // Kollar så att lösenord spalten inte lämnas tom.
      if (passwordRef.current.value) {
         promises.push(updatePassword(passwordRef.current.value))
      }

      Promise.all(promises)
         .then(() => {
            history.push("/")
         })
         .catch(() => {
            setError("Konoupdateringen misslykades")
         })
         .finally(() => {
            setLoading(false)
         })
   }

   return (
      <div>
         Security
         {error && <p>{error}</p>}
         <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef} required defaultValue={currentUser.email} />
            <input type="password" ref={passwordRef} placeholder="Lämna blankt för att behålla nuvarande" autocomplete="new-password" />
            <input type="password" ref={passwordConfirmRef} placeholder="Lämna blankt för att behålla nuvarande" />
            <button disabled={loading} type="submit">Uppdatera</button>
         </form>
      </div>
   )
}