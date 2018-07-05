import React, { Component } from 'react';
import './Navbar.css';
import Logo from '../../resources/fermidirak.png';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <img className='Navbar-logo' src={Logo}/>

        <h1>Fermi Dirak</h1>
      </div>
    );
  }
}

export default Navbar;
