import React, { Component } from 'react';
// import firebase from 'firebase';

import '../wall/wall.css'

class Wall extends Component {
  constructor() {
    super();
    this.state = { //guarda los elementos
      items: []
    }
    console.log(this.state)
    this.addComment = this.addComment.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addComment}>
            <input placeholder="comment..." ref={(input) => this.textInput = input}/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    )
  };
  //donde se recibe el evento
  addComment(event) {
    event.preventDefault();
    if (this.textInput.value === '') {
      return;
    }

    let newItem = {
      text: this.textInput.value,
      key: Date.now()
    }

    this.setState((previousState) => {
      return {
        items: previousState.items.concat(newItem),
      }
    })
    //referencia al input
    this.textInput.value = '';
    console.log(this.state.items)
    
    //referencia al fichero en firebase
    //const post = event.target.file[0]
    //const storageRef = firebase.storage().ref(menssageWall/${post.name})
    
  }
    
};

export default Wall;
