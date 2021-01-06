import React, { Component } from "react";
import firebase from "../../components/Firebase/Firebase";

class Services extends Component {
   state = {
      services: null,
      visible: false
   }

   componentDidMount() {
      console.log("mounted");
      const ref = firebase.firestore().collection("services");
      ref.get().then(snapshot => {
         const services = []
         snapshot.forEach(doc => {
            const data = doc.data()
            services.push(data)
         })
         this.setState({ services: services })
      }).catch(error => console.log(error))
   }

   getServices(e) {
      e.preventDefault();

      console.log("mounted");
      const ref = firebase.firestore().collection("services").where("category", "==", e.target.value.toString());
      ref.get().then(snapshot => {
         const services = []
         snapshot.forEach(doc => {
            const data = doc.data()
            services.push(data)
         })
         this.setState({ services: services })
      }).catch(error => console.log(error))
   }

   render() {
      return (
         <div className="services">
            Services
            <button onClick={this.componentDidMount.bind(this)}>Alla</button>
            <button onClick={this.getServices.bind(this)} value="hosting">Hosting</button>
            <button onClick={this.getServices.bind(this)} value="marketing">Marketing</button>
            <button onClick={this.getServices.bind(this)} value="maintenance">Maintenance</button>

            <p>Betala månadsvis</p>
            <label className="switch">
               <input onClick={() => { this.setState({ visible: !this.state.visible }) }} type="checkbox" />
               <span className="slider round"></span>
            </label>
            <p>Betala årligen <span>- få 2 månader gratis!</span></p>

            <button onClick={() => { this.setState({ visible: !this.state.visible }) }}>
               {this.state.visible ?
                  "Month"
                  :
                  "Year"
               }
            </button>

            {
               this.state.services &&
               this.state.services.map(service => {
                  return (
                     <div key={service.id}>
                        <h2>{service.title}</h2>

                        {this.state.visible ?
                           <p>{service.price * 10 * service.discountYear + " /år"}</p>
                           :
                           <p>{service.price * service.discountMonth + " /mån"}</p>
                        }

                     </div>
                  )
               })
            }
         </div>
      )
   }
}

export default Services