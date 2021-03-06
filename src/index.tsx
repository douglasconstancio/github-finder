import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './constants/styles/global';

import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
