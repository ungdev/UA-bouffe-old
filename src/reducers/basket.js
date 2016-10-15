const initialState = [];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat([ action.payload ]);
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
  }

  return state;
};

export default basket;
