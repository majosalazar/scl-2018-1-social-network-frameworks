import React, { Component } from 'react';
import LoginRegister from './loginRegister';
import '../login/login.css'


class LoginIntegral extends Component {
  render() {
    return (
      <div className ="Login-Integral">
      <LoginRegister />
      </div>
    );
  }
}

export default LoginIntegral;
