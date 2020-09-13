import http from '../../plugins/http';

export const authTypes = {
  SET_USER: 'SET_USER',
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