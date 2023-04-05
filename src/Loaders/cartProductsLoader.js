import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    // if cart data is database, you have to use async 
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    // if you need to sent two things 
    // return [data, saveCart]
    // another options 
    // return {products, cart: savedCart}
    return savedCart;


    // return [data, savedCart];
}

export default cartProductsLoader;