import React from 'react'
import { useAuth } from "../../contexts/AuthContext";
import firebase from "../../components/Firebase/Firebase";

export default function ServiceCard(props) {
   const { currentUser } = useAuth()

   function addToCart() {

      const docRef = firebase.firestore().collection("users").doc(currentUser.uid).collection("cart").doc(props.id);
      docRef.set({
         id: props.id,
         title: props.title,
         priceMonth: props.priceMonth,
         priceYear: props.priceYear,
         price: props.priceMonth,
         selected: null
      })

      console.log("Product added")
   }

   return (
      <div className="serviceCard" key={props.id}>
         <h3>{props.title}</h3>
         <p>{props.description[0]}</p>
         <p>{props.description[1]}</p>
         <p>{props.description[2]}</p>

         {props.visible ?
            <p>{props.priceYear + " /år"}</p>
            :
            <p>{props.priceMonth + " /mån"}</p>
         }

         <button onClick={addToCart}>Välj tjänst</button>

      </div>
   )
}