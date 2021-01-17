
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../assets/style';
import AppSidebarMenuItem from './AppSidebarMenuItem';

const Sidebar = styled.div`
    height: 100vh;
    background-color: ${colors.sidebar.bg};
    padding: 0 20px;
    position: fixed;
`

const Logo = styled.div`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${colors.sidebar.border};
    margin-bottom: 60px;
`

export default function AppSidebar() {
    return (
        <aside>
            <Sidebar>
                <Link to="/"><Logo><img src="/assets/logo.svg" alt="lokokino" /></Logo></Link>
                <Link to="/"><AppSidebarMenuItem name='Questions' icon='question' /></Link>
                <Link to="/movies"><AppSidebarMenuItem name='Movies' icon='overView' /></Link>
                <AppSidebarMenuItem name='Collections' icon='collection' />
                <AppSidebarMenuItem name='User' icon='user' />
                <a href="play"><AppSidebarMenuItem name='Play' icon='play' /></a>
            </Sidebar>
        </aside>
    )
}
