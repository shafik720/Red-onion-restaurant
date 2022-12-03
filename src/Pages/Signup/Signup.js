import React, { useState } from 'react';
import './Signup.css';
import signInLogo from '../../utilities/images/logo2.png';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Signup = () => {

    // react fire base hook 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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

    // function for getting value from re-password input field
    const [rePassword, setRePassword] = useState('');
    function handleRePassword(event) {
        setRePassword(event.target.value);
    }

    // function for submitt button and sign up method
    let [customError, setCustomError] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if (password.length < 6) {
            setCustomError('Password must be more than 6 Character');
            return;
        }else if(password !== rePassword){
            setCustomError("Password Didn't match with Re-password");
            return;
        }
        setCustomError('');
    }

    return (
        <div className='login-div'>
            <div className="login-header">
                <img src={signInLogo} alt="" />
            </div>
            <div className="login-inputs">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <input onBlur={handleEmail} type="email" name="" id="" placeholder='Email' />
                    <input onBlur={handlePassword} type="password" name="" id="" placeholder='Password' />
                    <input onBlur={handleRePassword} type="password" name="" id="" placeholder='Confirm Password' />
                    <div className="error-display">
                        <p>{customError ? customError : ''}</p>
                    </div>
                    <button type='submit'>Register</button>
                    <p className='text-center'>Already Have an Account ? <Link to='/login'><span className='blue-text'>Log in Here</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;