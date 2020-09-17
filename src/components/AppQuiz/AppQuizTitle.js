import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Icon from '../../assets/Icon';
import { colors } from '../../assets/style'
import { OPEN_QUESTION_MODAL, OPEN_CONFIRM_MODAL } from '../../store/modal/actions';
import { DELETE_QUESTION } from '../../store/quiz/actions';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h3`
    font-size: 30px;
    font-weight: 600;
`

const Delete = styled.button`
    background: 0;
    margin-right: 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const Button = styled.button`
    display: flex;
    background: ${colors.main.mainButton};
    color: white;
    height: 40px;
    width: 150px;
    border-radius: 3px;
    justify-content: space-around;
    font-family: "Poppins", sans-serif;
    padding: 0 20px;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }
`

export default function AppQuizTitle({ count }) {

    const dispatch = useDispatch();
    const { checkedQuestions } = useSelector(state => state.quiz);

    const openAddQuestionModal = () => {
        dispatch(OPEN_QUESTION_MODAL())
    }

    const openDeleteModal = () => {
        if (!checkedQuestions.length) return;

        dispatch(OPEN_CONFIRM_MODAL({
            title: 'Are you sure?',
            confirm: () => dispatch(DELETE_QUESTION()),
        }))
    }

    return (
        <Container>
            <Title>Quiz Questions</Title>
            <span>{count} Questions</span>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Delete onClick={openDeleteModal}>Delete selected</Delete>
                <Button onClick={openAddQuestionModal}>
                    <Icon name="add" />
                Add question
            </Button>
            </div>
        </Container>
    )
}
