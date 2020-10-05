import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../configs/firebaseConfig.js'
import Header from '../Header/Header.js';
import { userContext } from '../../../App.js';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);




const handleGoogleSignIn = (setUser,history,from) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        setUser(result.user);
        getAuthToken(history,from);
    })
    .catch(err => {
        console.log(err);
    })
    
}
const getAuthToken = (history,from) => {
    firebase.auth().currentUser.getIdToken(true)
    .then(idToken => {
        // Set session data
        sessionStorage.setItem('authToken', idToken);
        history.replace(from)
    })
    .catch(err => console.log(err))
}


const Login = () => {
    const { setUser } = useContext(userContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/'} };
    return (
        <>
        <Header></Header>
        <div className="bg-light py-5 my-3 mx-auto text-center container rounded">
            <h3>Login before you continue</h3>
            <button className="btn btn-warning" onClick={() => handleGoogleSignIn(setUser,history,from)}>Login with Google</button>
        </div>
        </>
    );
};

export default Login;