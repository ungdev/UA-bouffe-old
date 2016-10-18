export const addItem = (item) => {
  return {
    type   : 'ADD_ITEM',
    payload: item
  };
};

export const removeItem = (item) => {
  return {
    type   : 'REMOVE_ITEM',
    payload: item
  };
};

export const clearBasket = () => {
  return {
    type: 'CLEAR_BASKET'
  };
};

export const sendBasket = (basket) => {
  return (dispatch) => {
    const orders = window.hz('orders');

    basket = basket
      .map(item => {
        delete item.id;
        item.status  = 'pending';
        item.created = new Date();
        return item;
      });

    orders.insert(basket);

    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(clearBasket());
        resolve();
      }, 500);
    });
  };
};
