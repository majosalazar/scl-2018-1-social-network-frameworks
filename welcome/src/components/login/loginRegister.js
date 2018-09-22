import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Card, Icon } from 'react-materialize';
import '../login/login.css'
import LoginGoogle from './loginGoogle';
import Logo from './loginLogo';

class LoginRegister extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>

            <Card className='white' textClassName='black-text'>
            <Logo />
              <Input s={6} type="email" label="Correo Electronico"><Icon>contact_mail</Icon></Input>
              <Input s={6} type="password" label="Contraseña"><Icon>lock_outline</Icon></Input>
              <LoginGoogle />
            </Card>

          </Col>
          <Col sm={4}>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginRegister;