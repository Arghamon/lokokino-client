import React from 'react'
import styled from 'styled-components';
import { modalNames } from '../../store/modal/actions';
import AppModalConfirm from './AppModalConfirm';
import AppQuestionModal from './AppQuestionModal';

const ModalOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 20;
`

const AppModal = ({ name, data, close, closable }) => {
    const modals = {
        [modalNames.QUESTION_MODAL]: <AppQuestionModal close={close} data={data} />,
        [modalNames.CONFIRM_MODAL]: <AppModalConfirm close={close} data={data} />,
    };
    
    return (
        <ModalOverlay
            className="app-modal"
            onClick={closable && close}
            style={name === null ? { display: 'none' } : { display: 'flex' }}
        >
            {modals[name] || null}
        </ModalOverlay>
    );
};

export default AppModal;
