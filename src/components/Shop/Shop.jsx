import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    // const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 1 : get the id of the added product 
        for(const id in storedCart){
            //steps 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // steps 3: and quantity 
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                // step 4: add to the added product to the saved cart
                saveCart.push(addedProduct);
            }
            console.log(addedProduct);
        }
        // step 5: set the cart
        setCart(saveCart)
    },[products])
    
    
    
    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }


 
    
    
    // useEffect( ()=>{
    //     // console.log('product', products);
    //     const addedProduct = getShoppingCart();
    //     // step 1: get id
    //     for(const id in addedProduct){
    //         // step 2: get the product by using id
    //         const savedProduct = products.find(product => product.id === id)
    //         // get the quantity of the product
    //         const quantity = addedProduct[id]
    //         addedProduct.quantity = quantity;
    //         console.log(savedProduct);
    //     }
    // },[products])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;