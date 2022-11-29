import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeHeader.css'

const HomeHeader = () => {
    return (
        <div className='homeHeaderMenu mb-5'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Breakfast</NavLink>
            <NavLink to='/lunch' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Lunch</NavLink>
            <NavLink to='/dinner' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dinner</NavLink>
        </div>
    );
};

export default HomeHeader;