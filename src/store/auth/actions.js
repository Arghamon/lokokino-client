import http from '../../plugins/http';
import { SetUser } from '../../utils/Storage';

export const authTypes = {
  SET_USER: 'SET_USER',
  LOGIN_PENDING: 'LOGIN_PENDING',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};


export const SET_USER = (user) => async (dispatch) => {
  dispatch({ type: authTypes.SET_USER, data: user });

  const { data } = await http.get('quiz', {
    params: {
      page: 1,
    }
  });

  console.log(data);
}

export const LOGIN = ({ email, password }) => async (dispatch) => {
  dispatch({ type: authTypes.LOGIN_PENDING });

  try {
    const { data } = await http.post('/manage/login', { email, password });
    dispatch({ type: authTypes.LOGIN_SUCCESS, data: true });
    SetUser(data);
  } catch (e) {
    dispatch({ type: authTypes.LOGIN_ERROR, data: true });
  }
}

export const SET_LOGIN_STATUS = (data) => {
  return {
    type: authTypes.LOGIN_ERROR,
    data,
  }
}

export const LOGOUT = () => {
  SetUser(null);
  return {
    type: authTypes.LOGOUT,
  }
}