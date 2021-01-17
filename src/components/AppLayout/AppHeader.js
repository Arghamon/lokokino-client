import styled from 'styled-components';
import Icon from '../../assets/Icon';
import { colors } from '../../assets/style';
import AppUser from './AppUser';


const Header = styled.header`
    display: flex;
    height: 100px;
    border-bottom: 1px solid ${colors.sidebar.border};
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`;

const Title = styled.div`
    display: flex;
`;


export default function AppHeader({onLeave}) {
    return (
        <Header>
            <Title>
                <Icon name="question" color={colors.main.green} />
                <span style={{ marginLeft: 10 }}>Questions</span>
            </Title>
            <AppUser onLeave={onLeave}/>
        </Header>
    )
}
