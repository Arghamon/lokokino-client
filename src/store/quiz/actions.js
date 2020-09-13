import http from '../../plugins/http';
import { CLOSE_MODAL } from '../modal/actions';

export const quizTypes = {
    SET_QUIZ: 'SET_QUIZ',
    SET_PAGE_COUNT: 'SET_PAGE_COUNT',
    SET_COUNT: 'SET_COUNT',
    SET_LOADING: 'SET_LOADING',
    SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
    SET_ERROR: 'SET_ERROR',
};


export const FETCH_QUIZ = (page) => async (dispatch) => {

    dispatch({ type: quizTypes.SET_LOADING, data: true });

    const { data } = await http.get('quiz', {
        params: {
            page,
        }
    });

    dispatch({ type: quizTypes.SET_QUIZ, data: data.quiz });
    dispatch({ type: quizTypes.SET_PAGE_COUNT, data: data.pageCount });
    dispatch({ type: quizTypes.SET_COUNT, data: data.count });
    dispatch({ type: quizTypes.SET_ACTIVE_PAGE, data: page });
    dispatch({ type: quizTypes.SET_LOADING, data: false });
}

export const ADD_QUIZ = (form) => async (dispatch, getState) => {

    const { questions } = getState().quiz;
    try {
        const { data } = await http.post('quiz', form);

        questions.unshift(data.question);
        questions.pop();
        dispatch({ type: quizTypes.SET_QUIZ, data: questions });
        dispatch(CLOSE_MODAL());
    } catch (e) {
        dispatch(SET_ERROR(true));
    }
}

export const EDIT_QUIZ = (form) => async (dispatch, getState) => {
    try {
        const { questions } = getState().quiz;
        const { data } = await http.put(`quiz/${form.id}`, form);
        const index = questions.findIndex(({ _id }) => _id === form.id);
        questions[index] = data.question;

        dispatch({ type: quizTypes.SET_QUIZ, data: questions });
        dispatch(CLOSE_MODAL());
    } catch (e) {
        console.log(e);
        dispatch(SET_ERROR(true));
    }
}

export const DELETE_QUESTION = (id) => async (dispatch, getState) => {

    try {
        const { questions } = getState().quiz;
        await http.post('delete_quiz', { id });
        const updated = questions.filter(({ _id }) => _id !== id)

        dispatch({ type: quizTypes.SET_QUIZ, data: updated });
        dispatch(CLOSE_MODAL());
    } catch (e) {
        console.log(e);
        dispatch(SET_ERROR(true));
    }
}

export const SET_ERROR = (error) => async (dispatch, getState) => {
    dispatch({ type: quizTypes.SET_ERROR, data: error })
}

