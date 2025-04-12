import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Removed if not using

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, uncomment the line below and implement the function
// to handle the performance data.
// reportWebVitals(console.log);
