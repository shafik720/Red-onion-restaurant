import React from 'react';
import './Food.css'

const Food = (props) => {
    const{foodName, shortDesc, price, catagory, img} = props.index ; 
    return (
        <div className='col-lg-4 col-md-6   g-4'>
            <div className="food-card h-100">
            <img src={img} alt="" />
            <h2>{foodName} </h2>
            <p> {shortDesc} </p>
            <p className='price'>$ {price} </p>
            </div>
        </div>
    );
};

export default Food;