import React, { useState, useEffect } from "react";
import DeleteCartButton from "../../DeleteCartButton/DeleteCartButton";
import firebase from "../../../components/Firebase/Firebase";
import { useAuth } from "../../../contexts/AuthContext";

export default function SubscriptionItems(props) {
   const { currentUser } = useAuth()
   const [checked, setChecked] = useState(null);
   const docRef = firebase.firestore().collection("users").doc(currentUser.uid).collection("cart").doc(props.id);

   function updatePrice(e) {
      const inputId = e.currentTarget.id
      console.log(inputId)
      const number = parseInt(0 + e.target.value)
      docRef.update({
         price: number,
         selected: true
      })

      console.log("Preice updated")
   }

   function updatePrice2(e) {
      const inputId = e.currentTarget.id
      console.log(inputId)
      const number = parseInt(0 + e.target.value)
      docRef.update({
         price: number,
         selected: false
      })

      console.log("Preice updated")
   }

   function check() {
      if (props.selected == null) {
         setChecked(true)
      }
      if (props.selected != null) {
         setChecked(props.selected)
      }
   }

   useEffect(() => {
      check()
   }, [])

   return (
      <div className="subscriptionItems" key={props.id}>
         <DeleteCartButton
            id={props.id}
         />
         <h2 id="cartItemTitle">{props.title}</h2>

         {checked ?
            <form>
               <input
                  id="priceMonth"
                  name="price"
                  type="radio"
                  onClick={updatePrice}
                  value={props.priceMonth}
                  defaultChecked
               />
               <p>1 mån - {props.priceMonth} kr/mån</p>
               <input
                  id="priceYear"
                  name="price"
                  type="radio"
                  onClick={updatePrice2}
                  value={props.priceYear}
               />
               <p>1 år - {(props.priceYear / 12).toFixed(0)} kr/mån</p>
            </form>
            :
            <form>
               <input
                  id="priceMonth"
                  name="price"
                  type="radio"
                  onClick={updatePrice}
                  value={props.priceMonth}
               />
               <p>1 mån - {props.priceMonth} kr/mån</p>
               <input
                  id="priceYear"
                  name="price"
                  type="radio"
                  onClick={updatePrice2}
                  value={props.priceYear}
                  defaultChecked
               />
               <p>1 år - {(props.priceYear / 12).toFixed(0)} kr/mån</p>
            </form>
         }
         <p>Pris: {props.price}</p>
      </div>
   )
}