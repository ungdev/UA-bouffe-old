import { combineReducers } from 'redux';

import basket     from './basket';
import lowerPrice from './lowerPrice';
import modal      from './modal';
import orders     from './orders';
import allorders     from './allorders';
import orderCode  from './orderCode';

const app = combineReducers({
  basket,
  lowerPrice,
  modal,
  orders,
  allorders,
  orderCode
});

export default app;
