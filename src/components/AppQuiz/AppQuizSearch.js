import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_QUIZ, FETCH_QUIZ } from '../../store/quiz/actions';


const SearchInput = styled.input`
    width: 300px;
    padding: 10px 20px;
    border-radius: 10px;
    outline: 0;
    border: 1px solid rgba(0,0,0, 0.4);
`

export default function AppQuizSearch() {

    const dispatch = useDispatch();
    const { activePage } = useSelector(state => state.quiz);

    const [state, setState] = useState({
        typing: false,
        typingTimeout: 0
    });

    const onChange = ({ target }) => {
        if (target.value.length < 1) return dispatch(FETCH_QUIZ(activePage))

        if(target.value.length < 3)  return
    
        if (state.typingTimeout) clearTimeout(state.typingTimeout);

        setState({
            typing: false,
            typingTimeout: setTimeout(function () {
                if (target.value) {
                    dispatch(SEARCH_QUIZ({ input: target.value }));
                }
            }, 800)
        });

    }

    return (
        <SearchInput
            type="search"
            placeholder="მოძებნე ფილმი/კითხვა"
            onChange={onChange}
        />
    )
}
