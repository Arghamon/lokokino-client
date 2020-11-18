import React from 'react';
import AppQuizFooter from './AppQuizFooter';
import AppQuizHeader from './AppQuizTable/AppQuizHeader';
import AppQuizItem from './AppQuizTable/AppQuizItem';
import AppLoader from '../AppLoader';

export default function AppQuizBody({ loading, questions, pageCount, activePage }) {

    if(loading) return <AppLoader />

    if(!loading && questions.length < 1) return <div>კითხვა/ფილმი  არ მოიძებნა</div>;

    return (
        <div>
            <AppQuizHeader />
            {questions?.map(item => <AppQuizItem key={item._id} question={item} />)}
            <AppQuizFooter pageCount={pageCount} activePage={activePage} />
        </div>
    )
}
