import { combineReducers } from 'redux';

import basket     from './basket';
import lowerPrice from './lowerPrice';
import modal      from './modal';
import orders     from './orders';
import orderCode  from './orderCode';

const app = combineReducers({
  basket,
  lowerPrice,
  modal,
  orders,
  orderCode
});

export default app;
