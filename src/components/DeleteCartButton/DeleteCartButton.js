import React from 'react'
import firebase from "../../components/Firebase/Firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function DeleteCartButton(props) {
   const { currentUser } = useAuth()

   function removeFromCart() {
      firebase.firestore().collection("users").doc(currentUser.uid).collection("cart").doc(props.id).delete()
   }

   return (
      <div>
         <button onClick={removeFromCart}>X</button>
      </div>
   )
}
