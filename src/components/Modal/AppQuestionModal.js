import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/storage';
import styled from 'styled-components';
import { v1 as uuid } from 'uuid';
import Icon from '../../assets/Icon';
import { Button } from '../AppQuiz/AppQuizTitle';

import { ADD_QUIZ, EDIT_QUIZ, SET_ERROR } from '../../store/quiz/actions';
import AppLoader from '../AppLoader';

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

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 490px 610px;
    grid-column-gap: 52px;
    margin: 17px 0;
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 6px;
    filter: blur(${props => props.loading});
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
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

const Upload = styled.button`
    width: 100%;
    height: 56px;
    background: #e5eaf9;
    border-radius: 6px;
    color: #0735bf;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Buttons = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: flex-end;
    align-items: center; 
`




export default function AppQuestionModal({ data, close }) {

    const { questions, error } = useSelector(state => state.quiz);
    const dispatch = useDispatch();
    const file = useRef(null);
    const storage = useRef(null);
    const storageRef = useRef(null);
    const [form, setForm] = useState({
        title: '',
        answers: [],
        tags: '',
        image: null,
    });
    const [loading, setLoading] = useState(false);
    const [test, setTest] = useState(false);

    const firebaseFolder = test ? 'test' : 'images';


    useEffect(() => {
        storage.current = firebase.storage();
        storageRef.current = firebase.storage().ref();
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
    }, [data, questions]);

    const onChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
        error && dispatch(SET_ERROR(false));
    }
    const uploadFile = ({ target }) => {
        const file = target.files[0];
        const imageRef = storageRef.current.child(`${firebaseFolder}/${uuid()}`);
        setLoading(true);
        imageRef.put(file).then((snapshot) => {
            return imageRef.getDownloadURL();
        }).then(url => {
            setForm({ ...form, image: url });
            setLoading(false);
        })
    }
    const addQuestion = () => {
        const { title, image } = form
        const tags = form.tags?.split(',') || [];
        const answers = [form.answer1, form.answer2, form.answer3];
        if (!data.questionId) {
            return dispatch(ADD_QUIZ({ title, image, answers, tags }));
        }
        dispatch(EDIT_QUIZ({ title, image, answers, tags, id: data.questionId }));
    }
    const chooseImage = () => file.current.click();

    const onTestChange = () => setTest(true);

    return (
        <ModalContainer onClick={e => e.stopPropagation()}>
            <Title>
                <div>
                    {data.questionId ? 'Edit Question' : 'Add Question'}
                    <input type="checkbox" style={{ marginLeft: 10 }} onChange={onTestChange} />
                </div>
                <Icon name='close' onClick={close} onChange={onChange} />
            </Title>
            <Content>
                <div>
                    <div style={{ position: 'relative' }}>
                        {loading && <AppLoader />}
                        <Image src={form.image || "https://placekitten.com/900/500"} loading={loading ? '3px' : 0} />
                    </div>
                    <Upload onClick={chooseImage}>
                        <Icon name="image" style={{ marginRight: 5 }} /> Change image
                    </Upload>
                    <Input
                        placeholder="type tags here"
                        defaultValue={form.tags}
                        name="tags"
                        onChange={onChange}
                        style={{ marginTop: 15, width: 490 - 28 }}
                    />
                    <input type='file' onChange={uploadFile} style={{ display: 'none' }} ref={file} />
                </div>
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
            </Content>
        </ModalContainer>
    )
}
