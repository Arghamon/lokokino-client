import { movieTypes } from './actions';

const initialState = {
    movieList: [],
    pageCount: true,
    count: true,
    loading: true,
    activePage: 1,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case movieTypes.SET_MOVIES:
            return { ...state, movieList: action.data };
        case movieTypes.SET_LOADING:
            return { ...state, loading: action.data };
        default:
            return { ...state };
    }
};

export default reducer;