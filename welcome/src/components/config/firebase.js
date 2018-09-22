import firebase from 'firebase';


const config = {
 
        apiKey: "AIzaSyCTXrub4NptWZgUcFtbxRmT12VSKRuAfIw",
        authDomain: "react-welcome-8217f.firebaseapp.com",
        databaseURL: "https://react-welcome-8217f.firebaseio.com",
        projectId: "react-welcome-8217f",
        storageBucket: "react-welcome-8217f.appspot.com",
        messagingSenderId: "215210878542"
   
};

const fire = firebase.initializeApp(config)


export default fire;