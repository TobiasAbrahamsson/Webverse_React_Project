import React, { useState, useEffect } from 'react'
import firebase from '../../components/Firebase/Firebase'
import WebsiteCard from '../../components/WebsiteCard/WebsiteCard'

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

   return (
      <div>
         {websites.map((website) => (
            <div>
               <WebsiteCard
                  key={website.id}
                  id={website.id}
                  title={website.title}
                  url={website.url}
                  status={website.status}
               />
            </div>
         ))}
      </div>
   )
}