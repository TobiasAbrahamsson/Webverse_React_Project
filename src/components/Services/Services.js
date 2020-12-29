import React, { useState, useEffect } from 'react'
import firebase from '../Firebase/Firebase'
import Sidebar from '../Sidebar/Sidebar'

export default function Services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = firebase.firestore().collection("services")
    console.log(ref)

    function getServices() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) =>  {
            const items = []
            querySnapshot.forEach((doc) =>{
                items.push(doc.data())
            })
            setServices(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        getServices()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <Sidebar />
            <h2>Tjänster</h2>
            {services.map((service) => (
                <div key={service.id}>
                    <h2>{service.title}</h2>
                    <p>{service.price}</p>
                </div>
            ))}
        </div>
    )
}
