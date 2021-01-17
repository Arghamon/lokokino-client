import { authTypes } from './actions';

const initialState = {
  user: null,
  loginPending: false,
  loginError: false,
  loginSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER:
      return { ...state, user: action.data };
    case authTypes.LOGIN_PENDING:
      return { ...state, loginPending: true };
    case authTypes.LOGIN_ERROR:
      return { ...state, loginError: action.data, loginPending: false };
    case authTypes.LOGIN_SUCCESS:
      return { ...state, loginSuccess: action.data, loginPending: false };
    case authTypes.LOGOUT:
      return { ...state, loginSuccess: false, loginPending: false, loginError: false };
    default:
      return { ...state };
  }
};

export default reducer;