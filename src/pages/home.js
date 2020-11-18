import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AppQuiz from '../components/AppQuiz/AppQuiz';
import { FETCH_QUIZ } from '../store/quiz/actions';


export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_QUIZ(1));
    }, []);

    return (
        <div>
            <AppQuiz />
        </div>
    )
}
