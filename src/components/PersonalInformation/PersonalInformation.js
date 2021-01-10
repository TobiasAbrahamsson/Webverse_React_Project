import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import firebase, { storage } from "../../components/Firebase/Firebase";

export default function PersonalInformation() {
   const { currentUser } = useAuth()
   const [image, setImage] = useState(null);
   const [userInfo, setUserInfo] = useState(null);

   const [companyName, setCompanyName] = useState(null);
   const [phoneNumber, setPhoneNumber] = useState(null);
   const [profileImage, setProfileImage] = useState(null);

   function getUserInfo() {
      const ref = firebase.firestore().collection("users").where("id", "==", currentUser.uid);
      ref.get().then(snapshot => {
         const userInfo = []
         snapshot.forEach(doc => {
            const data = doc.data()
            userInfo.push(data)
         })
         setUserInfo(userInfo[0]);
         setCompanyName(userInfo[0].companyName);
         setPhoneNumber(userInfo[0].phoneNumber);
         setProfileImage(userInfo[0].profileImage);
      }).catch(error => console.log(error))
   }

   useEffect(() => {
      getUserInfo()
   }, [])

   function onSubmitInfo(e) {
      e.preventDefault();

      const docRef = firebase.firestore().collection("users").doc(currentUser.uid);
      docRef.set({
         id: currentUser.uid,
         companyName: e.target.elements.companyName.value,
         phoneNumber: e.target.elements.phoneNumber.value,
         profileImage: profileImage
      })

      console.log("Form submited")
   }

   function handleChange(e) {
      if (e.target.files[0]) {
         setImage(e.target.files[0]);
      }

      console.log("image selected")
   }

   function handleUpload() {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
         "state_changed",
         (snapshot) => {
            // Progress function
         },
         (error) => {
            // Error function
            console.log(error)
         },
         () => {
            // Complete function
            storage.ref("images").child(image.name).getDownloadURL().then(profileImage => {
               console.log(profileImage)
               setProfileImage(profileImage)
            })
         }
      );
   }

   function updateCompanyName(e) {
      setCompanyName(e.target.value);
   }

   function updatePhoneNumber(e) {
      setPhoneNumber(e.target.value);
   }

   function clg() {
      console.log(userInfo)
      console.log(userInfo.companyName)
   }

   return (
      <div className="personalInformation">
         Personlig information

         <form onSubmit={onSubmitInfo}>
            <button>Spara</button>
            <input
               type="text"
               name="companyName"
               value={companyName || ""}
               onChange={updateCompanyName} placeholder="Företagsnamn"
            />
            <input
               type="number"
               name="phoneNumber"
               value={phoneNumber || ""}
               onChange={updatePhoneNumber}
               placeholder="Telefonnummer"
            />
         </form>

         <label for="profileImageUpload">
            <img
               id="profileImage"
               src={profileImage || "https://via.placeholder.com/300"}
               alt="profile"
            />
         </label>
         <input id="profileImageUpload" type="file" onChange={handleChange} />
         <button onClick={handleUpload}>Upload</button>

         <br />

         <button onClick={clg}>clg</button>
      </div>
   )
}