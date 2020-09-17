import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { SET_ERROR } from '../../../store/quiz/actions';
import AppModalQuestionHeader from './AppModalQuestionHeader';
import AppModalQuestionImage from './AppModalQuestionImage';
import AppModalQuesitonForm from './AppModalQuesitonForm';

const ModalContainer = styled.div`
    background: white;
    flex-direction: column;
    position: relative;
    width: 1150px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 50px 50px;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 490px 610px;
    grid-column-gap: 52px;
    margin: 17px 0;
`


export default function AppQuestionModal({ data, close }) {

    const { questions, error } = useSelector(state => state.quiz);
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        title: '',
        answers: [],
        tags: [],
        image: null,
    });

    useEffect(() => {
        if (!data.questionId) return;

        const question = questions.find(({ _id }) => data.questionId === _id);
        setForm({
            title: question.title,
            tags: question.tags.join(','),
            image: question.image,
            answer1: question.answers[0],
            answer2: question.answers[1],
            answer3: question.answers[2],
        });
    }, [data.questionId, questions]);

    const onChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
        error && dispatch(SET_ERROR(false));
    }
    
    const setImage = (url) => setForm({ ...form, image: url });
    console.log(form);



    return (
        <ModalContainer onClick={e => e.stopPropagation()}>
            <AppModalQuestionHeader isEditable={!!data.questionId} close={close} />
            <Content>
                <AppModalQuestionImage setImage={setImage} image={form.image} onChange={onChange} tags={form.tags} />
                <AppModalQuesitonForm form={form} onChange={onChange} questionId={data.questionId} close={close} />
            </Content>
        </ModalContainer>
    )
}
