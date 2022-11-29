import React from 'react';
import './Header.css';
import headerLogo from '../../utilities/images/logo2.png';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="header-div">
                    <div className="left-header">
                        <img src={headerLogo} alt="" />
                    </div>
                    <div className="right-header"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;