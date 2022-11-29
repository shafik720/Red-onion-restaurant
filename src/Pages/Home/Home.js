import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import './Home.css'
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div className='home-div'>
            <Banner></Banner>
            <div className="home-desc-div my-5 text-center">
                <HomeHeader></HomeHeader>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;