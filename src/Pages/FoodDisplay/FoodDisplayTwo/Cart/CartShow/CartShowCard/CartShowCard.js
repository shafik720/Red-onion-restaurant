import React from 'react';
import './CartShowCard.css'

const CartShowCard = (props) => {
    const { foodName, shortDesc, price, catagory, img, id, quantity } = props.index;
    return (
        <div className='foodCard'>
            <div className="foodcard-left">
                <div className="foodcard-left-left">
                    <img src={img} alt="" />
                    <div className="foodcard-right">
                        <h2>Food Name : {foodName} </h2>
                        <p>Quantity : {quantity} </p>
                    </div>
                </div>
            </div>
            <div className="foodcard-right">
                <p>Delete</p>
            </div>
        </div>
    );
};

export default CartShowCard;