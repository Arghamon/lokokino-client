import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppQuizFooter from './AppQuizFooter';
import AppQuizHeader from './AppQuizTable/AppQuizHeader';
import AppQuizItem from './AppQuizTable/AppQuizItem';
import AppQuizTitle from './AppQuizTitle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
`

export default function AppQuiz() {

    const { questions, count, pageCount, activePage } = useSelector(state => state.quiz);


    return (
        <Container>
            <AppQuizTitle count={count}/>
            <AppQuizHeader />
            {questions?.map(item => <AppQuizItem key={item._id} question={item}/>)}
            <AppQuizFooter pageCount={pageCount} activePage={activePage}/>
        </Container>
    )
}
