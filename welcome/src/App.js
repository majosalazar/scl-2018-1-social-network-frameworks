import React, { Component } from 'react';
import LoginIntegral from './components/login/loginIntegral';
import '../src/App.css';

class App extends Component {
  render() {
    return (
      <header>
        <LoginIntegral />
      </header>
    );
  }
}

export default App;
