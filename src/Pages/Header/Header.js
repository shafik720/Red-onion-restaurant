import React, { useState } from 'react';
import './Header.css';
import headerLogo from '../../utilities/images/logo2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {    
    function menuShow(){
        const rightHeader = document.querySelector('.right-header');
        const bar = document.querySelector('.bar');
        const barCross = document.querySelector('.bar-cross');

        rightHeader.classList.add('active');
        bar.classList.add('hidden');
        barCross.classList.remove('hidden');
    }
    function menuHide(){
        const rightHeader = document.querySelector('.right-header');
        const bar = document.querySelector('.bar');
        const barCross = document.querySelector('.bar-cross');

        rightHeader.classList.remove('active');
        barCross.classList.add('hidden');
        bar.classList.remove('hidden');
    }
    return (
        <div>
            <div className=" header-div-parent">
                <div className="header-div">
                    <div className="left-header">
                        <Link to='/'><img src={headerLogo} alt="" /></Link>
                    </div>
                    <div className="right-header ">
                        <Link to='/cart'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
                        <Link className='commonLink' to='/login'>Login</Link>
                        <Link className='commonLink' to='/signup'>Sign Up</Link>
                    </div>                    
                    <div  className="mobile-menu">
                            <span onClick={menuShow} className='bar'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
                            <span onClick={menuHide} className='bar-cross hidden'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Header;