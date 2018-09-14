import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import LoginGoogle from './loginGoogle';
import LoginFacebook from './loginFacebook';
import { Input } from 'react-materialize';
import { Card} from 'react-materialize';
import { Icon } from 'react-materialize';
import '../login/login.css'

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
            <Card className='white' textClassName='white-text' title='Welcom Inmigrants'>
              <Input s={6} type="email" label="Correo Electronico"><Icon>contact_mail</Icon></Input>
              <Input s={6} type="password" label="Contraseña"><Icon>lock_outline</Icon></Input>
              <LoginGoogle />
              <LoginFacebook />
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