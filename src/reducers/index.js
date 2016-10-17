import { combineReducers } from 'redux';

import basket     from './basket';
import lowerPrice from './lowerPrice';
import modal      from './modal';

const app = combineReducers({
  basket,
  lowerPrice,
  modal
});

export default app;
