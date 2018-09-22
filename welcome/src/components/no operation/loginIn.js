import React, { Component } from 'react';
import { Row, Col, Card, } from 'react-grid-system';
import '../login/login.css'
import Logo from './loginLogo';
import LoginForm from './loginForm';

class LoginIn extends Component {

  render() {
    return (
      <Row >
        <Col s={12}>
          
            <Logo />
            <LoginForm />
          
        </Col>
      </Row>

    )
  }
}

export default LoginIn;