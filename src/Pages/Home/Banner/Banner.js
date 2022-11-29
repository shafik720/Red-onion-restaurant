import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-div container-fluid text-center'>
            <div className="banner-header">
                <h1>Heart is Where the Food is</h1>
            </div>
            <div className="banner-search">
                <input type="text" name="" id="" placeholder='Search Your Food Here . . .'/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;