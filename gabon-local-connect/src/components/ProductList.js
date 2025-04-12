import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Masque Gabonais', price: '15,000 CFA' },
    { id: 2, name: 'Tapis artisanal', price: '25,000 CFA' },
    { id: 3, name: 'Bijou traditionnel', price: '10,000 CFA' }
  ];

  return (
    <div data-testid="product-list">
      <h1>Produits Locaux</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
