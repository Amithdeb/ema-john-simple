import React from 'react';
import './Product.css'
const Product = (props) => {
    
    return (
        <div className="product">
            <div className="image">
            <img src={props.product.img} alt=""/>
            </div>
            <div>
    <h4 className="name">{props.product.name}</h4>
    <br/>
    <p>by:{props.product.seller}</p>
    <br/>
    <p>${props.product.price}</p>
    
    <p><small>only {props.product.stock}left in stock</small></p>
    <button className="main-btn" onClick={()=>{props.handleproduct(props.product)}}>add to cart</button>
            </div>
        </div>
        
    );
};

export default Product;