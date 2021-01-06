import React, { useState, useEffect } from 'react'
import firebase from '../../components/Firebase/Firebase'
import { Link } from "react-router-dom"

export default function Home() {
   var user = firebase.auth().currentUser
   console.log(user)
   console.log(user.uid)

   const [websites, setWebsites] = useState([])
   const [loading, setLoading] = useState(false)

   const ref = firebase.firestore().collection("users").doc(user.uid.toString()).collection("websites")
   console.log(ref)

   function getWebsites() {
      setLoading(true)
      ref.onSnapshot((querySnapshot) => {
         const items = []
         querySnapshot.forEach((doc) => {
            items.push(doc.data())
         })
         setWebsites(items)
         setLoading(false)
      })
   }

   useEffect(() => {
      getWebsites()
   }, [])

   if (loading) {
      return <h1>Loading...</h1>
   }

   const statusColor = [
      { background: "green" },
      { background: "orange" },
      { background: "red" }
   ]

   console.log(statusColor[0])

   return (
      <div>
         Webbsidor
         {websites.map((website) => (
            <div key={website.id}>
               <div className="websitesCard">
                  <h2>{website.title}</h2>
                  <p>{website.url}</p>
                  <p>{website.status}</p>
                  <div className="websiteStatus" style={statusColor[website.status]}></div>
                  <Link to={website.id + "/overview"}>Hantera</Link>
               </div>
            </div>
         ))}
      </div>
   )
}