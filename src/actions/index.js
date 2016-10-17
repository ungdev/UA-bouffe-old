// export * from './items';
// export * from './modal';
// export * from './lowerPrice';

import {
  addItem,
  removeItem,
  clearBasket,
  sendBasket
} from './items';

import { closeModal, openModal } from './modal';

import { lowerPrice } from './lowerPrice';

export {
  addItem,
  removeItem,
  clearBasket,
  sendBasket,
  lowerPrice,
  closeModal,
  openModal
};
