import { useEffect, useState } from "react";

function useCart() {
    const [cart, setCart] = useState([]);
    const [food, setFood] = useFood();
    useEffect(() => {
        let newCart = [];
        let cartValue = getStoredItem();
        for (let id in cartValue) {
            let addedProduct = food.find(index => index.id == id);
            if (addedProduct) {
                addedProduct.quantity = cartValue[id];
                newCart.push(addedProduct);
            }
        }
        setCart(newCart);
        return [cart, setCart];
    }, [food])
}

export default useCart;