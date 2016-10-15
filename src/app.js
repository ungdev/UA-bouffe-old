import './styles/index.css';

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import { Provider }                     from 'react-redux';
import createLogger                     from 'redux-logger';
import thunk                            from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import React      from 'react';
import { render } from 'react-dom';

import App     from './components/App';
import Index   from './components/Index';
import Prepare from './components/Prepare';
import Sell    from './components/Sell';

import app from './reducers';

const logger = createLogger();
const store  = createStore(
  app,
  applyMiddleware(logger, thunk)
);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="sell" component={Sell} />
        <Route path="prepare" component={Prepare} />
        <IndexRoute component={Index} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
