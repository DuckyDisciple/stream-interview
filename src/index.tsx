import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'layouts/App';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
