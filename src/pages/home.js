import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AppLoader from '../components/AppLoader';
import AppQuiz from '../components/AppQuiz/AppQuiz';
import { FETCH_QUIZ } from '../store/quiz/actions';


export default function HomePage() {

    const { loading, questions } = useSelector(state => state.quiz);

    const dispatch = useDispatch();

    useEffect(() => {
        if (questions.length) return;

        dispatch(FETCH_QUIZ(1));
    }, [dispatch, questions]);

    if (loading) return <AppLoader />

    return (
        <div>
            <AppQuiz />
        </div>
    )
}
