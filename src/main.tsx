import { injectGlobal } from '@emotion/css';
import { App } from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { fonts } from 'styles/fonts';
import { reset } from 'styles/reset';

injectGlobal(reset, fonts);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
