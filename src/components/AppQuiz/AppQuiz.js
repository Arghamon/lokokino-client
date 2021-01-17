
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppQuizBody from './AppQuizBody';
import AppQuizTitle from './AppQuizTitle';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
`

export default function AppQuiz() {

    const { loading, questions, count, pageCount, activePage } = useSelector(state => state.quiz);


    return (
        <Container>
            <AppQuizTitle count={count} />
            <AppQuizBody loading={loading} questions={questions} pageCount={pageCount} activePage={activePage} />
        </Container>
    )
}
