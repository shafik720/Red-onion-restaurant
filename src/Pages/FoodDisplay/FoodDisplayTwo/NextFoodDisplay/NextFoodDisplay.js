import React from 'react';
import './NextFoodDisplay.css';

const NextFoodDisplay = (props) => {
    const{ foodName, price, img, id} = props.index ; 
    return (
        <div className='col-4 next-food-card '>
            <div className="text-center h-100  ">
                <div className="h-100 next-food-single-item ">
                <img src={img} alt="" />
                <p className="fw-bold mt-3">{foodName}</p>
                </div>
            </div>
        </div>
    );
};

export default NextFoodDisplay;