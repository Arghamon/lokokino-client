import React from 'react';
import styled from 'styled-components';
import { TitleItem } from './AppQuizHeader';


const AnswerItem = styled(TitleItem)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Answer = styled.div`
    width: 240px;
    height: 30px;
    align-items: center;
    display: flex;
    margin-bottom: 10px;
    padding: 2px 0;
`;

const Number = styled.div`
   width: 24px;
   height: 24px;
   background: ${props => props.correct ? 'green' : '#707070'};
   margin-right: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
`;


export default function AppQuizItemAnswers({ question }) {
    return (
        <AnswerItem tile={5}>
            <Answer>
                <Number correct>1</Number>
                {question.title}
            </Answer>
            {question.answers.map((answer, index) =>
                <Answer key={index}>
                    <Number>{index + 1}</Number>
                    {answer}
                </Answer>
            )}
        </AnswerItem>
    )
}
