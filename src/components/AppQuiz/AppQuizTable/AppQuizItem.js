
import styled from 'styled-components';
import { Container } from './AppQuizHeader';
import AppQuizItemAnswers from './AppQuizItemAnswers';
import AppQuizItemControls from './AppQuizItemControls';
import AppQuizItemImage from './AppQuizItemImage';
import AppQuizItemTags from './AppQuizItemTags';



const ItemContainer = styled(Container)`
    background: white;
`



export default function AppQuizItem({ question }) {
    return (
        <ItemContainer>
            <AppQuizItemImage image={question.image} id={question._id} />
            <AppQuizItemAnswers question={question} />
            <AppQuizItemTags tags={question.tags} />
            <AppQuizItemControls questionId={question._id} />
        </ItemContainer>
    )
}
