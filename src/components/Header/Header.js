import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../components/Firebase/Firebase";
import { useAuth } from "../../contexts/AuthContext";
import AccountMenu from "../AccountMenu/AccountMenu";

export default function Header() {
   const { currentUser } = useAuth();
   const [visible, setVisible] = useState(false);
   const [cartSize, setCartSize] = useState("");
   const docRef = firebase.firestore().collection("users").doc(currentUser.uid).collection("cart");

   docRef.onSnapshot(snapshot => {
      console.log(snapshot.size)
      setCartSize(snapshot.size)
   });

   return (
      <div className="header">
         Header
         <Link to="/cart">Cart - {cartSize}</Link>
         <button onClick={() => {
            setVisible(!visible)
         }}>My Account</button>

         {visible ? <AccountMenu /> : null}
      </div>
   )
}
