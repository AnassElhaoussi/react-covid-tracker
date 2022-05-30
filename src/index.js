import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ResultsProvider } from './Contexts/DataResultContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultsProvider>
  </React.StrictMode>
);

