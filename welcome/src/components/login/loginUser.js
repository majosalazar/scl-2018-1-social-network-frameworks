import React, { Component } from 'react';
import firebase from 'firebase'; // aqui importamos firebase
import Home from './loginHome'
import LoginRegister from './loginRegister'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          user: {},
        });
        this.authListener = this.authListener.bind(this);
      }
    
      componentDidMount() {
        this.authListener();
      }
    
      authListener() {
        firebase.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
          } else {
            this.setState({ user: null });
          }
        });
      }
      render() {
        return (
         <div>
         {this.state.user ? ( <Home/>) : (<LoginRegister />)} 
         {/* si existe usuario anda al muro, sino muestra la iniciar sesión */}
         </div>
        )
      }
    }
export default User;