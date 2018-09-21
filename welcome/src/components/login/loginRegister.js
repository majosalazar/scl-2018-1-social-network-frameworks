import React, { Component } from 'react';
import firebase from 'firebase';
import { Container, Row, Col } from 'react-grid-system';
import { Input , Button ,Card ,Icon } from 'react-materialize';
import '../login/login.css'
import Logo from './loginLogo';

class LoginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.signUp = this.signUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  signUp(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => console.log(`${error.code}: ${error.message} Usuario no ha podido hacer loggin`))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>
            <Card className='CardRegister' textClassName='white-text'>
              <Logo />
              <form>
                <Input s={6} type="email" value={this.state.email} onChange={this.handleChange} label="Correo Electronico" name="email"><Icon>contact_mail</Icon></Input>
                <Input s={6} type="password" value={this.state.password} onChange={this.handleChange} label="Correo Electronico" name="password" label="Contraseña"><Icon>lock_outline</Icon></Input>
                <div className="center-align signUp"><h6 className="singUpBtn">¿No tienes cuenta?</h6> <Button className='btnRegister' type="email" onClick={this.signUp}>Registrate</Button></div>
              </form>
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