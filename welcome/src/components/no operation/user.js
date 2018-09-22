import React, { Component } from 'react';
import fire from '../config/firebase'; // aqui importamos firebase
import Home from './loginHome'
import Login from './login'



class User extends Component {
  constructor() {
    super();
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      
      if (user) {
      this.setState({ user });
      console.log(user);
      } else {
      this.setState({ user: null });
      }
    });
  }
  render() {
    return (
     <div>
     {this.state.user ? ( <Home/>) : (<Login/>)}
     </div>
    )
  }
}

export default User;