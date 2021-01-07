import React, { Component } from "react";
import firebase from "../../components/Firebase/Firebase";

export default class PersonalInformation extends Component {
   state = {
      userEmail: "null"
   }

   componentDidMount() {
      const user = firebase.auth().currentUser;
      console.log(user.uid)
      this.setState({ userEmail: user.uid })
   }

   onSubmitInfo(e) {
      e.preventDefault();
      console.log(this.state.userEmail)

      const docRef = firebase.firestore().collection("users").doc(this.state.userEmail);
      docRef.set({
         companyName: e.target.elements.companyName.value,
         phoneNumber: e.target.elements.phoneNumber.value
      })

      console.log("Form submited")
   }

   render() {
      return (
         <div>
            Personlig information
            <form onSubmit={this.onSubmitInfo.bind(this)}>
               <button>Spara</button>
               <input type="text" name="companyName" placeholder="Företagsnamn" />
               <input type="number" name="phoneNumber" placeholder="Telefonnummer" />
            </form>
            <button onClick={this.onSubmitInfo.bind(this)}>click</button>
         </div>
      )
   }
}