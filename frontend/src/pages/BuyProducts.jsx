import React, { useContext, useState } from "react";
import "../styles/buyProducts.css";
import productsData from "../data/productsData";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const BuyProducts = () => {

const {
cart,
addToCart,

} = useContext(CartContext);

const navigate = useNavigate();

const [search,setSearch] = useState("");

const filteredProducts = productsData.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="products-page">

<h1 className="products-title">
Agro Products
</h1>

<div className="top-section">

<div className="search-box">

<input
type="text"
placeholder="Search agricultural products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search-input"
/>

<button className="search-btn">
🔍
</button>

</div>

<div className="cart-top">

<button
className="cart-button"
onClick={()=>navigate("/cart")}
>
🛒 Cart ({cart.length})
</button>

</div>

</div>

<div className="products-grid">

{filteredProducts.length > 0 ? (

filteredProducts.map((product)=>(

<div className="product-card" key={product.id}>

<img
src={product.image}
alt={product.name}
className="product-image"
/>

<h2>{product.name}</h2>

<p>{product.description}</p>

<div className="rating">
⭐ {product.rating}
</div>

<h3>₹ {product.price}</h3>

<div className="product-buttons">

<button
className="add-cart-btn"
onClick={()=>addToCart(product)}
>
Add To Cart
</button>



<button
className="view-btn"
onClick={()=>navigate(`/product/${product.id}`)}
>
View
</button>

</div>

</div>

))

) : (

<h2 className="no-products">
No Products Found
</h2>

)}

</div>

</div>

);

};

export default BuyProducts;