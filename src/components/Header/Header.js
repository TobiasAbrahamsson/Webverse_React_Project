import React, { Component } from 'react'
import AccountMenu from '../AccountMenu/AccountMenu'

class Header extends Component {

   state = {
      visible: false
   }

   render() {
      return (
         <div className="header">
            Header
            <button onClick={() => {
               this.setState({ visible: !this.state.visible })
            }}>My Account</button>
            {this.state.visible ? <AccountMenu /> : null}
         </div>
      )
   }
}

export default Header