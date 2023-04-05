import Cart from '../Cart/Cart';
import {useLoaderData} from 'react-router-dom'
import Product from '../Product/Product';
import ReviewItems from '../ReviewItem/ReviewItems';
import './Orders.css'
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    savedCart.map(product => <ReviewItems
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;