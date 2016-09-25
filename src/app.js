import './styles/index.css';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import React      from 'react';
import { render } from 'react-dom';

import App     from './components/App';
import Index   from './components/Index';
import Prepare from './components/Prepare';
import Sell    from './components/Sell';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="sell" component={Sell} />
      <Route path="prepare" component={Prepare} />
      <IndexRoute component={Index} />
    </Route>
  </Router>
), document.getElementById('app'));
