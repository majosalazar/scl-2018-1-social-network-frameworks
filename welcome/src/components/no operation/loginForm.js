import React, { Component } from 'react';
import fire from '../config/firebase';
import Logo from './loginLogo'
import { Container, Row, Col } from 'react-grid-system'
import { Input, Button, Card, Icon } from 'react-materialize'
import '../login/login.css'


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.singUp = this.singUp.bind(this)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
    

  }

  singUp(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
  
    });

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
            <Card className='CardRegister' textClassName='black-text'>
            <Logo />
              <form>
                <Input s={10} type="email" value={this.state.email} onChange={this.handleChange} label="Correo Electronico" name="email" ><Icon>contact_mail</Icon></Input>
                <Input s={10} type="password" value={this.state.password} onChange={this.handleChange} label="Correo Electronico" name="password" label="Contraseña"><Icon>lock_outline</Icon></Input>
                <Button className='btnRegister center-align' onClick={this.singUp}>Registarte</Button>
                <Button className='btnRegister center-align' type='submit' onClick={this.login}>Iniciar Sesión</Button>
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


export default LoginForm;