import React from 'react';

const Recommendations = ({ preferences }) => {
  const allProducts = [
    { id: 1, name: 'Plat local - Nyembwe', category: 'Cuisine' },
    { id: 2, name: 'Sculpture en bois', category: 'Artisanat' },
    { id: 3, name: 'Tissu traditionnel', category: 'Mode' }
  ];

  const recommendedProducts = allProducts.filter(product =>
    preferences.includes(product.category)
  );

  return (
    <div data-testid="recommendations">
      <h2>Recommandations pour vous</h2>
      <ul>
        {recommendedProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
