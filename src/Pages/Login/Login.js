import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import signInLogo from '../../utilities/images/logo2.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import googleLogo from '../../utilities/images/icons/google.svg';
import githubLogo from '../../utilities/images/icons/github.svg';
import twitterLogo from '../../utilities/images/icons/twitter.svg';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // react fire base hook for sign in with email & password 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // react fire base hook for sign in with google 
    const [signInWithGoogle, userGoogle, errorGoogle] = useSignInWithGoogle(auth);


    // function for getting value from email input field
    const [email, setEmail] = useState('');
    function handleEmail(event) {
        setEmail(event.target.value);
    }

    // function for getting value from password input field
    const [password, setPassword] = useState('');
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        // navigate('/');
        navigate(from, { replace: true });
    }
    if (userGoogle) {
        // navigate('/');
        navigate(from, { replace: true });
    }
    return (
        <div className='login-div'>
            <div className="login-header">
                <img src={signInLogo} alt="" />
            </div>
            <div className="login-inputs">
                <form action="" onSubmit={handleSubmit}>
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Email' />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Password' />
                    <div className="error-display">
                        <p>{error ? error.message : ''}</p>
                        <p>{loading && <Spinner animation="border" variant="primary" />}</p>
                    </div>
                    <button type='submit'>Log In</button>
                    <p className='text-center'>New User ? <Link to='/signup'><span className='blue-text'>Register Now</span></Link> </p>
                </form>
                <div className="external-signIn-div mb-4">
                    <div className="orDiv">
                        <hr />
                        <p>Or Sign in using</p>
                    </div>
                    <p className='text-center'></p>
                    <div className="social-signIn">
                    <div draggable onClick={()=>signInWithGoogle()} className="google-signIn">
                        <img src={googleLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={githubLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={twitterLogo} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;