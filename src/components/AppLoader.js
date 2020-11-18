import React from 'react';
import styled from 'styled-components';
import PuffLoader from "react-spinners/PuffLoader";
import { colors } from '../assets/style';


const Loader = styled.div`
    position: absolute;
    top: 60%;
    left: 58%;
    transform: translate(-50%, -50%);
    z-index: 1;
`

export default function AppLoader({ style }) {
    return (
        <Loader style={style}>
            <PuffLoader color={colors.main.green} size={150} />
        </Loader>
    )
}
