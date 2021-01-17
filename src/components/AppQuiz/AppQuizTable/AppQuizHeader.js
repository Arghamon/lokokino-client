
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    background-color: #f6f6f7;
    border: 1px solid #e3e3e7;
`;

export const TitleItem = styled.div`
    flex:  ${props=> props.tile};
    padding: 20px 30px;
    color: #909599;
    font-size: 12px;
    border-right: 1px solid #e3e3e7;
    justify-content: center;
    align-items: center;
`;

export default function AppQuizHeader() {
    return (
        <Container>
            <TitleItem tile={1.5}>Photo</TitleItem>
            <TitleItem tile={5}>Answers</TitleItem>
            <TitleItem tile={3}>Tags</TitleItem>
            <TitleItem tile={0.5}>Actionss</TitleItem>
        </Container>
    )
}
