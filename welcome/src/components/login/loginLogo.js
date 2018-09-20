import React, { Component } from 'react';
import logoApp from '../logo-welcome2.png';
import '../login/login.css';
class Logo extends Component {

  render() {
    return (
      <div className="center-align">
        <img className="logoRedSocial" src={logoApp} />
      </div>
    )
  }
}

export default Logo;