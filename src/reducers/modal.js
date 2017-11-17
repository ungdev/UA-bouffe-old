import clone from 'lodash.clone';

const initialState = {
  valid: {
    active: false,
    payload: {}
  },
  cancel: {
    active: false,
    payload: {}
  },
  orderCode: {
    active: false,
    payload: {}
  }
};

const modal = (state = initialState, action) => {
  const newState = clone(state);

  switch (action.type) {
    case 'CLOSE_MODAL':
      newState[action.name] = {
        active: false,
        payload: action.payload
      };
      break;
    case 'OPEN_MODAL':
      newState[action.name] = {
        active: true,
        payload: action.payload
      };
      break;
  }

  return newState;
};

export default modal;
