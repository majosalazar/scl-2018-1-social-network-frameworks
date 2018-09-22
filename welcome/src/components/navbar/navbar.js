import React, { Component } from 'react';
import '../navbar/navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" class="brand-logo">Welcome!</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Muro</a></li>
            <li><a href="#">Perfl</a></li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </div>
      </nav>
  
      <ul class="sidenav" id="mobile-demo">
        <li><a href="#">Muro</a></li>
        <li><a href="#">Perfl</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
   
      </div>
    );
  }
}

export default Navbar;
