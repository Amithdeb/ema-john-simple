import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    
const first10= fakeData.slice(0,10)
const [products,setproducts]=useState(first10)
const [cart,setcart]=useState([])
const handleProduct=(y)=>{
    const newcart=[...cart,y]
    setcart(newcart);
}
    return (
        <div className="shop-container">
            <div className="product-container">
            
    {products.map(x=><Product handleproduct={handleProduct} product={x}></Product>)}
        </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
            </div>
    
    );
};

export default Shop;