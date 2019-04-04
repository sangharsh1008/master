
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import {Table} from './app.js';

import { store } from './store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
   <App />
</Provider>, document.getElementById('app'));