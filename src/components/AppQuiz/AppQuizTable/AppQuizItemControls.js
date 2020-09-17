import React from 'react';
import Icon from '../../../assets/Icon';
import styled from 'styled-components';
import { TitleItem } from './AppQuizHeader';
import { useDispatch } from 'react-redux';
import { OPEN_CONFIRM_MODAL, OPEN_QUESTION_MODAL } from '../../../store/modal/actions';
import { DELETE_QUESTION, SET_CHECKED_QUESTIONS } from '../../../store/quiz/actions';


export const Item = styled(TitleItem)`
    display: flex;
    align-items: center;
`


export default function AppQuizItemControls({ questionId }) {

    const dispatch = useDispatch();

    const editQuestion = () => dispatch(OPEN_QUESTION_MODAL({ questionId }));
    
    const openDeleteModal = () => {
        dispatch(OPEN_CONFIRM_MODAL({
            title: 'Are you sure?',
            confirm: () => deleteQuestion(questionId),
        }))
    }

    const deleteQuestion = (questionId) => {
        dispatch(SET_CHECKED_QUESTIONS(questionId));
        dispatch(DELETE_QUESTION())
    }

    return (
        <Item tile={.5} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }}>
            <Icon name='edit' color="#989898" onClick={editQuestion} />
            <Icon name='delete' color="#989898" onClick={openDeleteModal} />
        </Item>
    )
}
