import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Shopping() {
  const [cart, setCart] = useState([]);

  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addProductToCart = product => {
    console.log('we are in add To Cart');
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = productToRemove => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const emptyCart = cartEmpty => {
    setCart(cart.filter(product => product === cartEmpty));
  };

  const navigateTo = nextPage => {
    setPage(nextPage);
  };

  return (
    <div>
      <header>
        <h1>KC's Mall</h1>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Products addProductToCart={addProductToCart} />
      )}
      {page === PAGE_CART && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
        />
      )}
    </div>
  );
}

export default Shopping;
