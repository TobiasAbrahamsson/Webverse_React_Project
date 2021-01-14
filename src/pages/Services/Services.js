import React, { useState, useEffect } from "react";
import firebase from "../../components/Firebase/Firebase";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function Services() {
   const [services, setServices] = useState(null);
   const [visible, setVisible] = useState(false);
   const ref = firebase.firestore().collection("services");
   const websiteId = window.location.pathname.split('/')[1]
   console.log(websiteId)
   console.log(websiteId)

   function getAllServices() {
      ref.get().then(snapshot => {
         const services = []
         snapshot.forEach(doc => {
            const data = doc.data()
            services.push(data)
         })
         setServices(services)
      }).catch(error => console.log(error))
   }

   useEffect(() => {
      getAllServices()
   }, [])

   function getServices(e) {
      e.preventDefault();

      console.log("mounted");
      const ref = firebase.firestore().collection("services").where("category", "==", e.target.value);
      ref.get().then(snapshot => {
         const services = []
         snapshot.forEach(doc => {
            const data = doc.data()
            services.push(data)
         })
         setServices(services)
      }).catch(error => console.log(error))
   }

   return (
      <div className="services">
         Services
         <button onClick={getAllServices}>Alla</button>
         <button onClick={getServices} value="hosting">Hosting</button>
         <button onClick={getServices} value="marketing">Marketing</button>
         <button onClick={getServices} value="maintenance">Maintenance</button>

         <p>Betala månadsvis</p>
         <label className="switch">
            <input onClick={() => { setVisible(!visible) }} type="checkbox" />
            <span className="slider round"></span>
         </label>
         <p>Betala årligen <span>- få 2 månader gratis!</span></p>

         {
            services &&
            services.map(service =>
               <ServiceCard
                  key={service.id}
                  id={service.id + websiteId}
                  website={websiteId}
                  title={service.title}
                  description={service.description}
                  priceYear={service.priceYear}
                  priceMonth={service.priceMonth}
                  visible={visible}
               />
            )
         }
      </div>
   )
}