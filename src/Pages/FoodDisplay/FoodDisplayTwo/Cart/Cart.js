import React, { useEffect, useState } from 'react';
import useCart from '../../../../utilities/hooks/useCart';
import useFood from '../../../../utilities/hooks/useFood';
import { decreaseFromDb, deleteFromDb, getStoredItem, increaseFromDb } from '../../../../utilities/LocalStorage/storage';
import CartShow from './CartShow/CartShow';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [food, setFood] = useFood();

    // this decrease state is setup for updating cart state when user would increase, decrease or delete cart item, so that the cart div show real time information
    let[decrease, setDecrease] = useState([]);
    let decreaseCount = [];

    // this function would trigger when user click the Decrease button in cart 
    function decreaseFood(element){        
        decreaseFromDb(element);
        decreaseCount = [...decrease,element]
        setDecrease(decreaseCount);
    }
    // this function would trigger when user click the Delete button in cart 
    function deleteItem(id){
        deleteFromDb(id);
        decreaseCount = [...decrease,id]
        setDecrease(decreaseCount);
    }
    // this function would trigger when user click the decrease button in cart 
    function increaseFood(id){        
        increaseFromDb(id);
        console.log(id);
        decreaseCount = [...decrease,id]
        setDecrease(decreaseCount);
    }

    useEffect(() => {
        let newCart = [];
        let cartValue = getStoredItem();
        for (let id in cartValue) {
            let addedProduct = food?.find(index => index.id == id);
            if (addedProduct) {
                addedProduct.quantity = cartValue[id];
                newCart.push(addedProduct);
            }
        }
        setCart(newCart);
    }, [food, decrease]);
    
    return (
        <div>
            <h2>Total Items Added : {cart.length}</h2>
            <div className="">
                <CartShow 
                cart={cart}
                decreaseFood = {decreaseFood}
                deleteItem = {deleteItem}
                increaseFood = {increaseFood}
                ></CartShow>
            </div>
        </div>
    );
};

export default Cart;