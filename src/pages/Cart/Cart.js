import React, { useState, useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import firebase from "../../components/Firebase/Firebase";
import SubscriptionItems from '../../components/CartItems/SubscriptionItems/SubscriptionItems';

export default function Cart() {
   const { currentUser } = useAuth()
   const [cartInfo, setCartInfo] = useState([]);
   console.log(cartInfo)

   const ref = firebase.firestore().collection("users").doc(currentUser.uid).collection("cart");

   function getCart() {
      ref.onSnapshot((querySnapshot) => {
         const items = []
         querySnapshot.forEach((doc) => {
            items.push(doc.data())
         })
         setCartInfo(items)
      })
   }

   useEffect(() => {
      getCart()
   }, [])

   const totalPrice = cartInfo.reduce((prev, next) => prev + next.price, 0);
   console.log(totalPrice)

   return (
      <div>
         <div>
            <h2>Varukorg</h2>
            {
               cartInfo && cartInfo.map(cart => {
                  return (
                     <div>
                        <SubscriptionItems
                           id={cart.id}
                           title={cart.title}
                           priceMonth={cart.priceMonth}
                           priceYear={cart.priceYear}
                           price={cart.price}
                           selected={cart.selected}
                           website={cart.website}
                        />
                     </div>
                  )
               })
            }
         </div>
         <div>
            <h2>Totalsumma</h2>
            <p>Deltotal: {totalPrice}</p>
         </div>
      </div>
   )
}