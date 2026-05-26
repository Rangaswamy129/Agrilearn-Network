import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

const {
cart,
increaseQty,
decreaseQty
} = useContext(CartContext);

const navigate = useNavigate();

const total = cart.reduce(
(acc,item)=>acc + item.price * item.quantity,
0
);

return (

<div className="cart-page">

<h1>Your Cart</h1>

{cart.map((item)=>(

<div className="cart-item" key={item.id}>

<img src={item.image} alt="" />

<div>

<h2>{item.name}</h2>

<p>₹ {item.price}</p>

<div className="qty-box">

<button onClick={()=>decreaseQty(item.id)}>
-
</button>

<span>{item.quantity}</span>

<button onClick={()=>increaseQty(item.id)}>
+
</button>

</div>

</div>

</div>

))}

<div className="summary-box">

<h2>Order Summary</h2>

<h3>Total: ₹ {total}</h3>

<button
className="checkout-btn"
onClick={()=>navigate("/checkout")}
>
Proceed To Checkout
</button>

<button
className="back-btn"
onClick={()=>navigate("/buy-products")}
>
⬅ Back To Products
</button>

</div>
</div>

);
};

export default CartPage;