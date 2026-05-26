import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

const [cart,setCart] = useState([]);
const [wishlist,setWishlist] = useState([]);

const addToCart = (product) => {

const existing = cart.find((item)=>item.id === product.id);

if(existing){

setCart(
cart.map((item)=>
item.id === product.id
? {...item, quantity:item.quantity + 1}
: item
)
);

}else{

setCart([...cart,{...product,quantity:1}]);

}

};

const increaseQty = (id) => {

setCart(
cart.map((item)=>
item.id === id
? {...item, quantity:item.quantity + 1}
: item
)
);

};

const decreaseQty = (id) => {

setCart(
cart.map((item)=>
item.id === id
? {...item, quantity:item.quantity - 1}
: item
).filter((item)=>item.quantity > 0)
);

};

const addToWishlist = (product) => {

const exists = wishlist.find((item)=>item.id === product.id);

if(!exists){

setWishlist([...wishlist,product]);

}

};

return (

<CartContext.Provider
value={{
cart,
wishlist,
addToCart,
increaseQty,
decreaseQty,
addToWishlist
}}
>

{children}

</CartContext.Provider>

);

};

export default CartProvider;