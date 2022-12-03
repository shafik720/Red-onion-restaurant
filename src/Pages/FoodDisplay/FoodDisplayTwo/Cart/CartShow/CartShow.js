import React from 'react';
import CartShowCard from './CartShowCard/CartShowCard';

const CartShow = (props) => {
    let cart = props.cart;
    let quantity = 0;
    let price = 0;
    cart.forEach(index => {
        quantity = quantity + (index.quantity);
        price = price + (index.quantity * index.price);
    });
    let decreaseFood = props.decreaseFood;
    let deleteItem = props.deleteItem;
    let increaseFood = props.increaseFood;
    return (
        <div>
            <div className="cart-heading">
                <h2>Total Quantity : {quantity} </h2>
                <h2>Total Price : $ {price} </h2>
            </div>

            <div className="">
                {
                    cart.map(index => <CartShowCard
                        index={index}
                        key={index.id}
                        decreaseFood={decreaseFood}
                        deleteItem={deleteItem}
                        increaseFood={increaseFood}
                    ></CartShowCard>)
                }
            </div>
        </div>
    );
};

export default CartShow;