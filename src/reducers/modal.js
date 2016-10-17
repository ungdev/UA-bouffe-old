const clone = require('lodash.clone');

const initialState = {
  valid: false
};

const modal = (state = initialState, action) => {
  const newState = clone(state);

  switch (action.type) {
    case 'CLOSE_MODAL':
      newState[action.payload] = false;
      break;
    case 'OPEN_MODAL':
      newState[action.payload] = true;
      break;
  }

  return newState;
};

export default modal;
