import { combineReducers } from 'redux';

import basket     from './basket';
import lowerPrice from './lowerPrice';

const app = combineReducers({
  basket,
  lowerPrice
});

export default app;
