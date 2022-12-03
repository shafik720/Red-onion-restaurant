import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import signInLogo from '../../utilities/images/logo2.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import googleLogo from '../../utilities/images/icons/google.svg';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // react fire base hook 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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
                <div className="external-signIn-div">
                    <div className="orDiv">
                        <hr />
                        <p>Or</p>
                    </div>
                    <p className='text-center'>Sign in using</p>
                    <div className="social-signIn">
                    <div className="google-signIn">
                        <img src={googleLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={googleLogo} alt="" />
                    </div>
                    <div className="google-signIn">
                        <img src={googleLogo} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;