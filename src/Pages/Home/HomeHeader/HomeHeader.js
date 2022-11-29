import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className='mb-5'>
            <Link to='/'>Breakfast</Link>
            <Link to='/lunch'>Lunch</Link>
            <Link to='/dinner'>Dinner</Link>
        </div>
    );
};

export default HomeHeader;