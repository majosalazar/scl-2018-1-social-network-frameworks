import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyCTXrub4NptWZgUcFtbxRmT12VSKRuAfIw",
    authDomain: "react-welcome-8217f.firebaseapp.com",
    databaseURL: "https://react-welcome-8217f.firebaseio.com",
    projectId: "react-welcome-8217f",
    storageBucket: "",
    messagingSenderId: "215210878542"

});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
