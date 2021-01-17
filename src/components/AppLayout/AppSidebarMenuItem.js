
import styled from 'styled-components';
import { colors } from '../../assets/style';
import Icon from '../../assets/Icon';

const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.sidebar.text};
    border: 2px solid transparent;
    border-radius: 6px;
    padding: 0 30px;
    cursor: pointer;
    &:hover {
        color: #fff;
        border: 2px solid ${colors.sidebar.textBorder};
        box-shadow: 0 0 5px ${colors.sidebar.textBorder};
        transition: all 0.4s ease-in-out;
    }
`
const IconContainer = styled.div`
    margin-right: 10px;
`

export default function AppSidebarMenuItem({ name, icon }) {
    return (
        <Container>
            <IconContainer>
                <Icon name={icon} />
            </IconContainer>
            {name}
        </Container>
    )
}
