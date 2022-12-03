import React from 'react';

const CartShow = (props) => {
    let cart = props.cart;
    let quantity = 0;
    cart.forEach(index=>{
        quantity = quantity + (index.quantity);
    })
    return (
        <div>
            <h2>Total Food Added: {quantity} </h2>
        </div>
    );
};

export default CartShow;