import { authTypes } from './actions';

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER:
      return { ...state, user: action.data };
    default:
      return { ...state };
  }
};

export default reducer;