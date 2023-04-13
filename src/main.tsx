import { injectGlobal } from '@emotion/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { fonts } from 'styles/fonts';
import { reset } from 'styles/reset';
import App from './App';

injectGlobal(reset, fonts);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
