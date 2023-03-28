import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; // option 1
    const {cart} = props // option 2
    
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    console.log(total);

    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
        <p>Total Shipping: </p>
            <p>Tax: </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;