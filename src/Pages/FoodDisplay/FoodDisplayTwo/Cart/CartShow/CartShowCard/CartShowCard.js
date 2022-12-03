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
                    <p>Quantity : <span className='blue-text quantity-class'>{quantity}</span>  </p>
                    <p>Price Per Unit : <span className='blue-text'> $ {price}</span> </p>
                </div>
            </div>
            <div className="foodcard-right">
                <div className="cart-delete-button">
                    <p draggable onClick={()=>props.deleteItem(id)}>Delete</p>
                </div>
                <div className="cart-button">
                    <p draggable onClick={()=>props.decreaseFood(id)} className='working-button-2  fw-bold fw-bolder'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></p>
                    <p draggable className='quantity-class'>{quantity}</p>
                    <p draggable onClick={()=>props.increaseFood(id)} className='working-button-2 fw-bold fw-bolder'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></p>
                </div>
            </div>
        </div>
    );
};

export default CartShowCard;