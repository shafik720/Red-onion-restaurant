import React from 'react';
import './NextFoodDisplay.css';

const NextFoodDisplay = (props) => {
    const{ price, img, id} = props.index ; 
    return (
        <div className='col-lg-4 next-food-card h-100'>
            <div className="text-center h-100">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NextFoodDisplay;