import React from 'react'
import styled from 'styled-components'
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar';

const Conatiner = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;


export default function AppLayout({ children }) {
    return (
        <Conatiner>
            <AppSidebar />
            <Content>
                <AppHeader />
                {children}  
            </Content>
        </Conatiner>
    )
}
