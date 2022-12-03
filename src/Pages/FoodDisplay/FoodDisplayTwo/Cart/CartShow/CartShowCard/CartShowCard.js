import React from 'react';
import './CartShowCard.css'

const CartShowCard = (props) => {
    const { foodName, shortDesc, price, catagory, img, id } = props.index;
    return (
        <div className='foodCard'>
            <div className="foodcard-left">
                <div className="foodcard-left-left">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="foodcard-right"></div>
            <h2>Food Name : {foodName} </h2>
        </div>
    );
};

export default CartShowCard;