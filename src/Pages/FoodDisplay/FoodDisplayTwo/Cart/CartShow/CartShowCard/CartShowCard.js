import React from 'react';
import './CartShowCard.css'

const CartShowCard = (props) => {
    const { foodName, shortDesc, price, catagory, img, id, quantity } = props.index;
    return (
        <div className='foodCard'>
            <div className="foodcard-left">
                <div className="foodcard-left-left">
                    <img src={img} alt="" />
                </div>
                <div className="foodcard-left-right">
                        <p>Food Name : <span className='black-text'>{foodName}</span>  </p>
                        <p>Quantity : <span className='blue-text'>{quantity}</span>  </p>
                        <p>Price Per Unit : <span className='blue-text'> $ {price}</span> </p>
                    </div>
            </div>
            <div className="foodcard-right">
                <p>Delete</p>
            </div>
        </div>
    );
};

export default CartShowCard;