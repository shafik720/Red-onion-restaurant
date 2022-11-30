import React from 'react';
import './FoodDisplayTwo.css';

const FoodDisplayTwo = (props) => {
    return (
        <div>
            <h2>Food Name : {props.index.foodName} </h2>
        </div>
    );
};

export default FoodDisplayTwo;