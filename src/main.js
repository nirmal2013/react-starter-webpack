import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import AppStore from './app/redux/store';
import App from './app/app';

let shouldExposeReduxTools = true;
if(process.env.NODE_ENV === 'production') {
  shouldExposeReduxTools = false;
}

const store = AppStore.create(shouldExposeReduxTools);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
