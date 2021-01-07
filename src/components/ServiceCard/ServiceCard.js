import React, { Component } from 'react'

class ServiceCard extends Component {

   render() {
      return (
         <div className="serviceCard" key={this.props.id}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description[0]}</p>
            <p>{this.props.description[1]}</p>
            <p>{this.props.description[2]}</p>

            {this.props.visible ?
               <p>{this.props.priceYear + " /år"}</p>
               :
               <p>{this.props.priceMonth + " /mån"}</p>
            }

            <button>Välj tjänst</button>

         </div>
      )
   }
}

export default ServiceCard;