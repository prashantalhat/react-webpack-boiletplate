import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import GiphySerachApp from './reducers';
import App from './components/App';

import './styles/main.scss';

const store = createStore(GiphySerachApp);

const title = 'My minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// Additionally in the src/index.js file you have to define
// that hot reloading is available and should be used.
module.hot.accept();
