import React from 'react';
import CartShowCard from './CartShowCard/CartShowCard';

const CartShow = (props) => {
    let cart = props.cart;
    let quantity = 0;
    cart.forEach(index=>{
        quantity = quantity + (index.quantity);
    })
    return (
        <div>
            <h2>Total Quantity : {quantity} </h2>
            <div className="">
                {
                    cart.map(index=><CartShowCard 
                        index = {index}
                        key = {index.id}
                    ></CartShowCard>)
                }
            </div>
        </div>
    );
};

export default CartShow;