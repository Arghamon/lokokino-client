import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../assets/style';
import { FETCH_QUIZ } from '../../store/quiz/actions';

const PageNumber = styled.span`
    color: ${props => props.active && colors.main.green};
    margin-right: 20px;
    font-size: 16px;
    cursor: pointer;
`
const Pages = styled.span`
    display: flex;
    align-items: center;
    height: 50px;
`

export default function AppQuizFooter({pageCount, activePage}) {

    const dispatch = useDispatch();

    const goToPage = (id) => {
        dispatch(FETCH_QUIZ(id + 1));
    }

    return (
        <Pages>
            {[...Array(pageCount).keys()].map(
                item => <PageNumber
                    key={item}
                    active={activePage === (item+1)}
                    onClick={() => goToPage(item)}>
                    {item + 1}
                </PageNumber>
            )}
        </Pages>
    )
}
