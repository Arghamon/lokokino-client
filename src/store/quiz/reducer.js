import { quizTypes } from './actions';

const initialState = {
  questions: [],
  pageCount: true,
  count: true,
  loading: true,
  activePage: 1,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case quizTypes.SET_QUIZ:
      return { ...state, questions: action.data };
    case quizTypes.SET_PAGE_COUNT:
      return { ...state, pageCount: action.data };
    case quizTypes.SET_COUNT:
      return { ...state, count: action.data };
    case quizTypes.SET_ACTIVE_PAGE:
      return { ...state, activePage: action.data };
    case quizTypes.SET_ERROR:
      return { ...state, error: action.data };
    case quizTypes.SET_LOADING:
      return { ...state, loading: action.data };
    default:
      return { ...state };
  }
};

export default reducer;