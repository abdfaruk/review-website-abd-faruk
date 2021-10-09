import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import './SignIn.css';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from '../../Firebase/Firebase.init';




initAuth();

const googleProvider = new GoogleAuthProvider();


const SignIn = () => {
    const [user, setUser] = useState({})
    const iconGoogle = <FontAwesomeIcon icon={faGoogle}/>
    const iconFacebook = <FontAwesomeIcon icon={faFacebook} />
    const handleSignInGoogle =() =>{
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then( result =>{
            const {displayName, photoURL} = result.user;
            const signedInUser = {
                name: displayName,
                photo: photoURL
            };
            setUser(signedInUser);
        })
    }

    return (
        <div className="d-flex">
            <div>
                <div className="login-form">
                    <form>
                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                Example checkbox
                                </label>
                            </div>
                            </div>
                        </div>
                        <button type="submit" className="btn sign-in-btn-1">Sign in</button>
                    </form>
                    </div>
                <div className="signBtn">
                    <button onClick={handleSignInGoogle} className="sign-in-btn">{iconGoogle} Sign in with Google</button> <br />
                    <button className="sign-in-btn-2">{iconFacebook} Sign in with Facebook</button>
                    <br />
                    {
                        user.name && <div>
                            <h2>Welcome {user.name}</h2>
                            <img src={user.photo} alt="" />
                            <h4>Please Login</h4>
                        </div>
                    }
                </div>
            </div>
            <div>
                <h1>asdhhdjasdj</h1>
            </div>
        </div>
    );
};

export default SignIn;