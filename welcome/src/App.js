import React, { Component } from 'react';
import Login from './components/login/login';
import '../src/App.css';

class App extends Component {
  render() {
    return (
      <header className="App">
       <Login />
      </header>
    );
  }
}

export default App;
