import React, { Component } from 'react';



class Home extends Component {
  constructor() {
    super();
    this.state = ({
      user: {},
    });
  
  }

  render() {
    return (
     <div>
     <h1> Hola!!</h1>
     </div>
    )
  }
}

export default Home;