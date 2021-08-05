import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import StoreProvider from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
render(
  <Router>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root')
);
