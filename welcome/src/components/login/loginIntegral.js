import React, { Component } from 'react';
import LoginRegister from './loginRegister';
import '../login/login.css'


class LoginIntegral extends Component {
  render() {
    return (
      <div className ="Login-Integral">
      <img src='../../img/logo-welcome2.png' ></img>
      <LoginRegister />
      </div>
    );
  }
}

export default LoginIntegral;
