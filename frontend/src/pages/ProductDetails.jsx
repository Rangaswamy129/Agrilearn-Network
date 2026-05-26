import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import "../styles/productDetails.css";

const ProductDetails = () => {

const { id } = useParams();

const navigate = useNavigate();

const product = productsData.find(
(item) => item.id === Number(id)
);

if(!product){

return (
<div className="details-page">

<h1>Product Not Found</h1>

<button onClick={() => navigate("/buy-products")}>
Back
</button>

</div>
);
}

return (

<div className="details-page">

<div className="details-card">

<img
src={product.image}
alt={product.name}
className="details-image"
/>

<div className="details-content">

<h1>{product.name}</h1>

<div className="details-rating">
⭐ {product.rating}
</div>

<h2>₹ {product.price}</h2>

<p>
{product.description}
</p>

<p>
This agricultural product is designed for modern farming
and helps improve productivity, efficiency, and crop
management. Farmers can use this equipment for long-term
sustainable agricultural practices.
</p>

<p>
Built with premium quality materials, this product ensures
durability and excellent performance in farming activities.
It is widely used in smart agriculture and advanced farming.
</p>

<div className="details-buttons">

<button
className="buy-btn"
onClick={() => navigate("/checkout")}
>
Buy Now
</button>

<button
className="back-btn"
onClick={() => navigate("/buy-products")}
>
⬅ Back
</button>

</div>

</div>

</div>

</div>

);

};

export default ProductDetails;