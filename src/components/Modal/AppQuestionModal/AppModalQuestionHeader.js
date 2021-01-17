
import Icon from '../../../assets/Icon';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
`;

export default function AppModalQuestionHeader({ isEditable, close }) {
    return (
        <Header>
            {isEditable ? 'Edit Question' : 'Add Question'}
            <Icon name='close' onClick={close} />
        </Header>
    )
}
