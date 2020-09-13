import {
    createStore,
    combineReducers,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  import authReducer from './auth/reducer';
  import quizReducer from './quiz/reducer';
  import modalReducer from './modal/reducer';
  import moviesReducer from './movies/reducer';
  
  export const store = createStore(
    combineReducers({
      auth: authReducer,
      quiz: quizReducer,
      modal: modalReducer,
      movies: moviesReducer,
    }),
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
  
  export default store;
  