import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import firebase from 'firebase'; // aqui importamos firebase
import Wall from '../wall/wall'
import '../login/login.css'
import { Button } from 'react-materialize'
// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = ({
//       user: {},
//     });
//     this.authListener = this.authListener.bind(this);
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     firebase.auth().onAuthStateChanged((user) => {
//       console.log(user);
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }
//   render() {
//     return (
//      <div>
//      {this.state.user ? ( <Home/>) : (<LoginRegister />)}
//      </div>
//     )
//   }
// }

// export default User;

class LoginGoogle extends Component {
    constructor() {
        super(); // esta funcion debe estar para que el constructor funcione
        this.state = { // aqui defino mi estado de nuestro componente
            user: null
        };

        this.getAuth = this.getAuth.bind(this);
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


    renderButton() { // esta funcion sirve para renderizar si el usuario se loguea o no 
        //   // si esta logueado el usuario
        if (this.state.user) { // aqui sabe si el usuario es null cuando haga el reseteado
            return (
               <Wall />
            );

            // si no esta logueado
        } else {
            return (
                <div className="center-align">

                    <Button className='btnGoogle' onClick={this.getAuth}>Google</Button>

                </div>
            )
        }

    }

    render() {
        return (
            <div>

                {this.renderButton()}

            </div>
        )
    }
}

export default LoginGoogle;