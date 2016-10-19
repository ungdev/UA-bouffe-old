// export * from './items';
// export * from './modal';
// export * from './lowerPrice';
// export * from './orders';

import {
  addItem,
  removeItem,
  clearBasket,
  sendBasket
} from './items';

import { closeModal, openModal } from './modal';

import { lowerPrice } from './lowerPrice';

import { order, listenForOrders, nextOrderCode } from './orders';

export {
  addItem,
  removeItem,
  clearBasket,
  sendBasket,
  lowerPrice,
  closeModal,
  openModal,
  order,
  listenForOrders,
  nextOrderCode
};
