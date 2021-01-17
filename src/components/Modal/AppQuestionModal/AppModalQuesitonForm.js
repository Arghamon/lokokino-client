
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ADD_QUIZ, EDIT_QUIZ } from '../../../store/quiz/actions';
import { Button } from '../../AppQuiz/AppQuizTitle';

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    height: 56px;
    width: 582px;
    margin-bottom: 18px;
    background-color: ${props => props.correct ? '#eaf8ef' : '#fafafa'};
    padding-left: 28px;
    border:${props => props.correct ? '1px solid #28c358' : '1px solid #dcdce0'};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    border-radius: 6px;
`

const Buttons = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: flex-end;
    align-items: center; 
`


export default function AppModalQuesitonForm({ form, onChange, questionId, close }) {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.quiz);
    
    const isEditable = !!questionId;


    const addQuestion = () => {
        const { title, image } = form
        const tags = form.tags?.split(',') || [];
        const answers = [form.answer1, form.answer2, form.answer3];
        if (!isEditable) {
            return dispatch(ADD_QUIZ({ title, image, answers, tags }));
        }
        dispatch(EDIT_QUIZ({ title, image, answers, tags, id: questionId }));
    }

    return (
        <Form>
            <Input correct placeholder="correct answer" defaultValue={form.title} name="title" onChange={onChange} />
            <Input placeholder="type answer here" defaultValue={form.answer1} name="answer1" onChange={onChange} />
            <Input placeholder="type answer here" defaultValue={form.answer2} name="answer2" onChange={onChange} />
            <Input placeholder="type answer here" defaultValue={form.answer3} name="answer3" onChange={onChange} />
            <span style={{ color: 'red', fontSize: 12 }}>{error ? 'form is invalid' : ''}</span>
            <Buttons>
                <span style={{ marginRight: 10, cursor: 'pointer' }} onClick={close}>Cancel</span>
                <Button onClick={addQuestion}>Save Question</Button>
            </Buttons>
        </Form>
    )
}
