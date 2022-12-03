import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    return (
        <div>
            <h2>Login First</h2>
        </div>
    );
};

export default Login;