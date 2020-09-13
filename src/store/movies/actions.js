import http from '../../plugins/http';
// import { CLOSE_MODAL } from '../modal/actions';

export const movieTypes = {
    SET_MOVIES: 'SET_MOVIES',
    SET_LOADING: 'SET_LOADING',
};


export const FETCH_MOVIES = (page) => async (dispatch) => {

    dispatch({ type: movieTypes.SET_LOADING, data: true });

    const { data } = await http.get('movies', {
        params: {
            page,
        }
    });

    dispatch({ type: movieTypes.SET_MOVIES, data: data.data });
    dispatch({ type: movieTypes.SET_LOADING, data: false });
}