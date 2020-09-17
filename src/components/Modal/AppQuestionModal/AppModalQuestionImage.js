import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { v1 as uuid } from 'uuid';
import Icon from '../../../assets/Icon';
import AppLoader from '../../AppLoader';
import firebase from 'firebase';
import AppModalQuestionTags from './AppModalQuestionTags';


const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 6px;
    filter: blur(${props => props.loading});
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

const Checkbox = styled.input`
    position: absolute;
    bottom: 10px;
    left: 5px;
`

const placeholderImag = "https://placekitten.com/900/500";

export default function AppModalQuestionImage({ image, setImage, onChange, tags }) {

    const [loading, setLoading] = useState(false);
    const [storage, setStorage] = useState('images');
    const storageRef = useRef(null);
    const file = useRef(null);

    useEffect(() => {
        storageRef.current = firebase.storage().ref();
    }, [])

    const uploadFile = ({ target }) => {
        const file = target.files[0];
        const imageRef = storageRef.current.child(`${storage}/${uuid()}`);
        setLoading(true);
        imageRef.put(file).then((snapshot) => {
            return imageRef.getDownloadURL();
        }).then(url => {
            setImage(url);
            setLoading(false);
        })
    }

    const chooseImage = () => file.current.click();

    const changeStorage = ({ target }) => {
        setStorage(target.checked ? 'test' : 'images');
    }

    return (
        <div>
            <div style={{ position: 'relative' }}>
                {loading && <AppLoader />}
                <Image src={image || placeholderImag} loading={loading ? '3px' : 0} />
                <Checkbox type='checkbox' onChange={changeStorage} />
            </div>
            <Upload onClick={chooseImage}><Icon name="image" style={{ marginRight: 5 }} /> Change image </Upload>
            <input type='file' onChange={uploadFile} style={{ display: 'none' }} ref={file} />
            <AppModalQuestionTags onChange={onChange} tags={tags} />
        </div>
    )
}