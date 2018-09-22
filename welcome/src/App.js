import React, { Component } from 'react';
import LoginIntegral from './components/login/loginIntegral';
import Navbar from './components/navbar/navbar';
import '../src/App.css';
import LoginGoogle from './components/login/loginGoogle'

class App extends Component {
  render() {
    return (
      <div>
       
        <LoginIntegral />

        </div>
        
    )
  }
}

export default App;
