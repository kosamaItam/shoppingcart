import React, { useState } from 'react';

function Products({ addToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: 'T Shirt',
      cost: '$1500',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlUbsxGaNnjydxxkMjt0i38BslTq1I1_CyQ&usqp=CAU'
    },
    {
      id: 2,
      name: 'Blanket',
      cost: '$780',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0LAESkBPiaehu64TKO2jy9Iy6FtfjGjioA&usqp=CAU'
    },
    {
      id: 3,
      name: 'Shoe',
      cost: '$4580',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJwofqsd39veOheZm6PK_3sTydZufoofb7g&usqp=CAU'
    }
  ]);

  return (
    <div className="container">
      <h1 className="heading">Products</h1>

      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
