import React, { useEffect, useState } from 'react';
import useCart from '../../../../utilities/hooks/useCart';
import useFood from '../../../../utilities/hooks/useFood';
import { decreaseFromDb, deleteFromDb, getStoredItem } from '../../../../utilities/LocalStorage/storage';
import CartShow from './CartShow/CartShow';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [food, setFood] = useFood();

    let[decrease, setDecrease] = useState([]);
    let decreaseCount = [];
    function decreaseFood(element){        
        decreaseFromDb(element);
        decreaseCount = [...decrease,element]
        setDecrease(decreaseCount);
    }
    function deleteItem(id){
        deleteFromDb(id);
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
                ></CartShow>
            </div>
        </div>
    );
};

export default Cart;