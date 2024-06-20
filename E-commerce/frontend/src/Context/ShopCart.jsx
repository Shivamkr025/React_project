import React,{createContext , useState} from "react";
import Mans from "../Components/Mans";

export const ShopCart = createContext(null)

const getDefaultCart = () => {
    
    let cart = {}
    for(let i=0; i< Mans.length+1 ; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItem , setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev , [itemId]:prev[itemId]+1}))
        console.log(cartItem);
    }

    const removeFromCart = () => {
        setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        console.log(cartItem);
    }

    const contextValue = {Mans , cartItem , addToCart , removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider