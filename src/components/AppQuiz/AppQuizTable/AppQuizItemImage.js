import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleItem } from './AppQuizHeader';
import { colors } from '../../../assets/style';

const Figure = styled.div`
    width: 120px;
    height: 80px;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Input = styled.input`
    margin-right: 18px;
    cursor: pointer;
`

const Container = styled(TitleItem)`
    display: flex;
    align-items: center;
    position: relative;
`

const ActiveLine = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 7px;
    height: 100%;
    background: ${colors.main.mainButton};
    transition: 0.3s;
    opacity: ${props => props.visible ? 1 : 0}
`;

export default function AppQuizItemImage({ image }) {

    const [checked, setChecked]= useState(false);

    const checkQuestion = () => setChecked(!checked);

    return (
        <Container tile={1.5}>
            <ActiveLine visible={checked}/>
            <Input type="checkbox" checked={checked} onChange={checkQuestion}/>
            <Figure>
                <Image src={image} alt="movie" onClick={checkQuestion}/>
            </Figure>
        </Container>
    )
}
