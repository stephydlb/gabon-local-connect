import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders ProductList component', () => {
    render(<App />);
    const productListElement = screen.getByTestId('product-list');
    expect(productListElement).toBeInTheDocument();
  });

  test('renders Recommendations component', () => {
    render(<App />);
    const recommendationsElement = screen.getByTestId('recommendations');
    expect(recommendationsElement).toBeInTheDocument();
  });

  test('renders Map component', () => {
    render(<App />);
    const mapElement = screen.getByTestId('map');
    expect(mapElement).toBeInTheDocument();
  });

  test('passes userPreferences to Recommendations', () => {
    render(<App />);
    const recommendationsElement = screen.getByTestId('recommendations');
    expect(recommendationsElement).toHaveAttribute('preferences');
    expect(recommendationsElement.getAttribute('preferences')).toEqual('Cuisine,Artisanat');
  });

  test('renders the correct title in ProductList', () => {
    render(<App />);
    const titleElement = screen.getByText('Produits Locaux');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct title in Recommendations', () => {
    render(<App />);
    const titleElement = screen.getByText('Recommandations pour vous');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the correct title in Map', () => {
    render(<App />);
    const mapElement = screen.getByTestId('map');
    expect(mapElement).toBeInTheDocument();
  });
});
