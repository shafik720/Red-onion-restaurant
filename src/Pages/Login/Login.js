import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import signInLogo from '../../utilities/images/logo2.png';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
                    <button type='submit'>Log In</button>
                    <p className='text-center'>New User ? <Link to='/signup'><span className='blue-text'>Register Now</span></Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;