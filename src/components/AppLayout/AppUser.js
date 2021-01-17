import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`
const Image = styled.img`
    border-radius: 10px;
    object-fit: cover;
`

const User = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const Name = styled.span`
    font-weight: 700;
`
const Role = styled.span`
    font-size: 12px;
`
const Logout = styled.button`
    background: #ea5455;
    color: #fff;
`

export default function AppUser({ onLeave }) {
    return (
        <Container>
            <Image src="/assets/avatar.png" />
            <User>
                <Name>Davit Bakuradze</Name>
                <Role>
                    Administrator
                    <Logout onClick={onLeave}>Leave</Logout>
                </Role>
            </User>
        </Container>
    )
}
