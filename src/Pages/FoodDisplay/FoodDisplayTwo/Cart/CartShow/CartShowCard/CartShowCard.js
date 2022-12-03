import React from 'react';
import './CartShowCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
                <div className="cart-button">
                        <p className='working-button fw-bold fw-bolder'><FontAwesomeIcon className='working-button ' icon={faPlus}></FontAwesomeIcon></p>
                        <p>0</p>
                        <p className='working-button  fw-bold fw-bolder'><FontAwesomeIcon className='working-button ' icon={faMinus}></FontAwesomeIcon></p>
                    </div>
            </div>
        </div>
    );
};

export default CartShowCard;