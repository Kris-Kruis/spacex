import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './modules/App';
import configureStore from './redux/configureStore';

const history = createBrowserHistory();
const { store } = configureStore();

render(
  <App history={history} store={store} />,
  document.getElementById('root')
);
