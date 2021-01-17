
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CLOSE_MODAL } from '../../store/modal/actions';

const Container = styled.div`
    padding: 50px 0;
    width: 500px;
    flex-direction: column;
    height: 200px;
    background: white;
    border-radius: 10px;
    justify-content: space-around;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    background-color: blue;
    color: white;
    font-size: 14px;
    font-family: 'Poppins';
    border-radius: 10px;
    margin-right: 20px;
`;
const SecondaryButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid blue;
`;


export default function AppModalConfirm({ data }) {

    const { confirm, title } = data;
    const dispatch = useDispatch();

    const close = () => dispatch(CLOSE_MODAL());

    return (
        <Container>
            {title}
            <div>
                <SecondaryButton onClick={close}>No</SecondaryButton>
                <Button onClick={confirm}>Yes</Button>
            </div>
        </Container>
    )
}
