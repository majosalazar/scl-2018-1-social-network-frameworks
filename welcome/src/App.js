import React, { Component } from 'react';
import LoginIntegral from './components/login/loginIntegral';
import Navbar from './components/navbar/navbar';
import '../src/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <LoginIntegral />

        </div>
        <div>
        <Navbar />

        </div>
      </div>
    );
  }
}

export default App;
