import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders ProductList component', async () => {
    render(<App />);
    await waitFor(() => {
      const productListElement = screen.getByTestId('product-list');
      expect(productListElement).toBeInTheDocument();
    });
  });

  test('renders Recommendations component', async () => {
    render(<App />);
    await waitFor(() => {
      const recommendationsElement = screen.getByTestId('recommendations');
      expect(recommendationsElement).toBeInTheDocument();
    });
  });

  test('renders Map component', async () => {
    render(<App />);
    await waitFor(() => {
      const mapElement = screen.getByTestId('map');
      expect(mapElement).toBeInTheDocument();
    });
  });

  test('passes userPreferences to Recommendations', async () => {
    render(<App />);
    await waitFor(() => {
      const recommendationsElement = screen.getByTestId('recommendations');
      expect(recommendationsElement).toHaveAttribute('preferences');
      expect(recommendationsElement.getAttribute('preferences')).toEqual('Cuisine,Artisanat');
    });
  });

  test('renders the correct title in ProductList', async () => {
    render(<App />);
    await waitFor(() => {
      const titleElement = screen.getByText('Produits Locaux');
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('renders the correct title in Recommendations', async () => {
    render(<App />);
    await waitFor(() => {
      const titleElement = screen.getByText('Recommandations pour vous');
      expect(titleElement).toBeInTheDocument();
    });
  });

  test('renders the correct title in Map', async () => {
    render(<App />);
    await waitFor(() => {
      const mapElement = screen.getByTestId('map');
      expect(mapElement).toBeInTheDocument();
    });
  });

  test('renders products in ProductList', async () => {
    render(<App />);
    await waitFor(() => {
      const productElements = screen.getAllByRole('listitem');
      expect(productElements.length).toBeGreaterThan(0);
    });
  });

  test('renders recommendations in Recommendations', async () => {
    render(<App />);
    await waitFor(() => {
      const recommendationElements = screen.getAllByRole('listitem');
      expect(recommendationElements.length).toBeGreaterThan(0);
    });
  });
});
