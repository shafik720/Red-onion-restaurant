import React from 'react';
import './Signup.css';
import signInLogo from '../../utilities/images/logo2.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='login-div'>
            <div className="login-header">
                <img src={signInLogo} alt="" />
            </div>
            <div className="login-inputs">
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password' />
                    <input type="password" name="" id="" placeholder='Confirm Password' />
                    <button type='submit'>Register</button>
                    <p className='text-center'>Already Have an Account ? <Link to='/login'><span className='blue-text'>Log in Here</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;