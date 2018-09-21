import React, { Component } from 'react';
import '../src/App.css';
import User from './components/login/loginUser'

class App extends Component {
  render() {
    return (
      <header>
        <User />
      </header>
    );
  }
}

export default App;
