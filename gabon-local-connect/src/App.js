import React from 'react';
import ProductList from './components/ProductList'; // Corrected import path
import Recommendations from './components/Recommendations'; // Corrected import path
import Map from './components/Map'; // Corrected import path

function App() {
  const userPreferences = ['Cuisine', 'Artisanat'];

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
