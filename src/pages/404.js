import React from 'react'
import styled from 'styled-components';
import { colors } from '../assets/style';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 31px;
    background: ${colors.main.green};
    color: white;
    height: 200px;
`

export default function NotFoundPage() {
    return (
        <Container>
            Page Not Found
        </Container>
    )
}
