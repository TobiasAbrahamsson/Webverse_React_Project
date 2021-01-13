import React, { Component } from 'react'
import AccountMenu from '../AccountMenu/AccountMenu'
import { Link } from 'react-router-dom'

class Header extends Component {

   state = {
      visible: false
   }

   render() {
      return (
         <div className="header">
            Header
            <Link to="/cart">Cart</Link>
            <button onClick={() => {
               this.setState({ visible: !this.state.visible })
            }}>My Account</button>

            {this.state.visible ? <AccountMenu /> : null}
         </div>
      )
   }
}

export default Header