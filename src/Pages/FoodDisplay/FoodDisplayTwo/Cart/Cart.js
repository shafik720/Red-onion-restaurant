import React, { useEffect, useState } from 'react';
import { getStoredItem } from '../../../../utilities/LocalStorage/storage';

const Cart = () => {
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        let cartValue = getStoredItem();
        console.log(cartValue);
    },[cart])
    return (
        <div>
            <h2>Total Food Added : </h2>
        </div>
    );
};

export default Cart;