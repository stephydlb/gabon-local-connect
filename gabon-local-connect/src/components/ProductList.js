import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Fetch from data.json
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-testid="product-list">
      <h1>Produits Locaux</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>
              {product.name} - {product.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
