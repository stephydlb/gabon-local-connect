import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Recommendations from './components/Recommendations';
import Map from './components/Map';

function App() {
  const [userPreferences, setUserPreferences] = useState(['Cuisine', 'Artisanat']);

  return (
    <div className="App">
      {/* Product List Section */}
      <ProductList data-testid="product-list" />

      {/* Recommendations Section */}
      <Recommendations data-testid="recommendations" preferences={userPreferences} />

      {/* Map Section */}
      <Map data-testid="map" />
    </div>
  );
}

export default App;
