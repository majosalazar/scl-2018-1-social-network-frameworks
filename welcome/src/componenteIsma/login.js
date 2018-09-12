import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize'
import firebase from 'firebase'; // aqui importamos firebase


import '../componenteIsma/login.css';

class Login extends Component {
  constructor() {
    super(); // esta funcion debe estar para que el constructor funcione
    this.state = { // aqui defino mi estado de nuestro componente
      user: null
    };

    this.getAuth = this.getAuth.bind(this);
    this.logginOut = this.logginOut.bind(this);
  }
  // // metodo de react
  componentDidMount() { //Se ejecuta después de que el componente sea renderizado en el DOM.
    firebase.auth().onAuthStateChanged(user => { // Esto es un escuchador y me permite obtener el usuario actual
      this.setState({ user }) // resetea el estado 
      // se escribe solo user porque semantica de ES6 ( clave y valor iguales)
    })
  }

  getAuth() {
    //Proveedor de google
    let provider = new firebase.auth.GoogleAuthProvider();
    //Añadiendo Api de Google
    firebase.auth().signInWithPopup(provider) // Esto devuelve una promesa
      // Aqui obtengo el email 
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      // Si hay algun error, aqui se muestra
      .catch(error => console.log(`${error.code}: ${error.message} Usuario no ha podido hacer loggin`))
  }

  logginOut() { // Funcion para cerrar sesion
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      // Si hay algun error, aqui se muestra
      .catch(error => console.log(`${error.code}: ${error.message} Usuario no ha podido hacer loggin`))
  }

  renderButton() { // esta funcion sirve para renderizar si el usuario se loguea o no 
    //   // si esta logueado el usuario
    if (this.state.user) { // aqui sabe si el usuario es null cuando haga el reseteado
      return (
        <div>
          <p>Hola{this.state.user.email}</p>
          <button onClick={this.logginOut}>Salir</button>

        </div>
      )
      // si no esta logueado
    } else {
      return (
        <div>
          <Button waves='light'><Icon>thumb_up</Icon>
          </Button>

          <button onClick={this.getAuth}>Google</button>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        <p>
          {this.renderButton()}
        </p>
      </div>
    )
  }
}

export default Login;