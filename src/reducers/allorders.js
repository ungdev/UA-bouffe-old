const allorders = (state = [], action) => {
  switch(action.type) {
    case 'ALLORDERS':
      return action.payload
  }

  return state;
};

export default allorders;
