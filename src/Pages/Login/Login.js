import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import signInLogo from '../../utilities/images/logo2.png';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

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
    }
    if(user){
        navigate('/');
    }
    return (
        <div className='login-div'>
            <div className="login-header">
                <img src={signInLogo} alt="" />
            </div>
            <div className="login-inputs">
                <form action="" onSubmit={handleSubmit}>
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Email'/>
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Password' />
                    <button type='submit'>Log In</button>
                    <p className='text-center'>New User ? <Link to='/signup'><span className='blue-text'>Register Now</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;