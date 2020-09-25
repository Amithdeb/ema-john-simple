import React from 'react';

const Cart = (props) => {
    const cart=props.cart
   console.log(cart)
   
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered:{cart.length}</h4>
    <h4>Total price:</h4>

        </div>
    );
};

export default Cart;