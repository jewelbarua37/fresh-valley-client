import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';



firebase.initializeApp(firebaseConfig)


const Login = () => {
  const [userInfo, setUserInfo] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
  });
 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleAuth = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      
      const {displayName, photoURL, email} = result.user;
      const signedInUser ={
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUserInfo(signedInUser);
      setLoggedInUser(signedInUser);
     
      console.log(displayName, photoURL, email);
      
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  return (
    <div className="text-center">
        <h2>You Need To Login To Buy Anything</h2>
        {
          userInfo.isSignedIn && <div>
              <h3> Welcome, {userInfo.name}</h3>
              <p>Your Email: {userInfo.email}</p>
              
          </div>
        }
        <br/>
        <button onClick={handleGoogleAuth} type="button" className="btn btn-outline-success border rounded">Continue With Google</button>
    </div>
  );
};

export default Login;