import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/*
import react form 'react';
import ReactDom from 'react-dom'@fortawesome/fontawesome-freeimport {provider} from 'react-redux'

import store form './store';

ReactDOM.render(
<Provider store ={store}>
<App/>
</Provider>,
document.getElementByID('root');
)
*/