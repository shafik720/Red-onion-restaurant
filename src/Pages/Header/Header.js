import React from 'react';
import './Header.css';
import headerLogo from '../../utilities/images/logo2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    function menuShow(){
        const rightHeader = document.querySelector('.right-header');

        rightHeader.classList.add('active');
    }
    return (
        <div>
            <div className="container header-div-parent">
                <div className="header-div">
                    <div className="left-header">
                        <Link to='/'><img src={headerLogo} alt="" /></Link>
                    </div>
                    <div className="right-header ">
                        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
                        <Link className='commonLink' to='/login'>Login</Link>
                        <Link className='commonLink' to='/signup'>Sign Up</Link>
                    </div>                    
                    <div onClick={menuShow} className="mobile-menu">
                            <span><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Header;