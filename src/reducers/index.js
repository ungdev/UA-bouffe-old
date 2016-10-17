import { combineReducers } from 'redux';

import basket     from './basket';
import lowerPrice from './lowerPrice';
import modal      from './modal';
import orders     from './orders';

const app = combineReducers({
  basket,
  lowerPrice,
  modal,
  orders
});

export default app;
