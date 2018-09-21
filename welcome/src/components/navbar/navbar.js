import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
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
    )
  }
}