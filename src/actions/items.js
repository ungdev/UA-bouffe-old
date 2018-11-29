import axios from '../lib/axios'

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

export const addOrder = (item) => {
  return async () => {
    try {
      await axios.post(`orders`, {
        ...item, items: JSON.stringify(item.items)
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const sendBasket = (basket) => {
  return (dispatch) => {
    
    basket = basket
      .map(item => {
        delete item.id
        item.status  = item.noPrep ? 'ready' : 'pending'
        delete item.noPrep
        return item
      });

    for(let item of basket) {
      console.log(item)
      dispatch(addOrder(item))
      
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(clearBasket());
        resolve();
      }, 500);
    });
  };
};
