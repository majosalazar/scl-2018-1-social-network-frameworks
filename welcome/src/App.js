import React, { Component } from 'react';
import '../src/App.css';
import LoginGoogle from './components/login/loginGoogle'

class App extends Component {
  render() {
    return (
      <div>
        <LoginGoogle />
      </div>
    );
  }
}

export default App;
