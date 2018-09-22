// import React, { Component } from 'react';
// import firebase from 'firebase';
// import { Button} from 'react-materialize'
// import '../login/login.css'


// class LoginRegister extends Component {
//     constructor() {
//         super()
//         this.state = {
//             email: '',
//             password: ''
//         }

       
//         this.handleChange = this.handleChange.bind(this)
//     }

//     singUp(e) {
//         e.preventDefault();
//         firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
//             console.log(error);
//         });

//     }

//     handleChange(e) {
//         this.setState({ [e.target.name]: [e.target.value] });
//     }

//     render() {
//         return (

//             <Button className='btnRegister center-align' onClick={this.singUp}>Registarte</Button>
//         )
//     }
// }



// export default LoginRegister;