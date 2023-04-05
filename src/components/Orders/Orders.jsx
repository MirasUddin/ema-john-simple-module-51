import Cart from '../Cart/Cart';
import {useLoaderData} from 'react-router-dom'
import Product from '../Product/Product';
import ReviewItems from '../ReviewItem/ReviewItems';
import './Orders.css'

const Orders = () => {
    const cart = useLoaderData()
    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems
                    key={product.id}
                    product={product}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;