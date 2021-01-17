import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { LOGOUT } from '../../store/auth/actions';
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

    const dispatch = useDispatch();
    const leave = () => dispatch(LOGOUT())

    return (
        <Conatiner>
            <AppSidebar />
            <Content>
                <AppHeader onLeave={leave}/>
                {children}  
            </Content>
        </Conatiner>
    )
}
