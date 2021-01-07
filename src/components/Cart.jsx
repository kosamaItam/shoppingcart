import React, { useState } from 'react';

function Cart({ cart, removeFromCart, emptyCart }) {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      <h1 className="heading">Cart</h1>

      <button onClick={() => emptyCart()}>Clear Cart</button>

      <div className="products">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />

            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
