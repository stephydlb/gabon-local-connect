import React, { useState, useEffect } from 'react';

const Recommendations = ({ preferences }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Fetch from data.json
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const recommendedProducts = allProducts.filter(product =>
    preferences.includes(product.category)
  );

  return (
    <div data-testid="recommendations">
      <h2>Recommandations pour vous</h2>
      <ul>
        {recommendedProducts.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <div>{product.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
