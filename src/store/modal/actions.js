export const modalTypes = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
};

export const modalNames = {
    QUESTION_MODAL: 'QUESTION_MODAL',
    CONFIRM_MODAL: 'CONFIRM_MODAL',
};

export const OPEN_QUESTION_MODAL = (data) => {
    return {
        type: modalTypes.OPEN_MODAL,
        payload: {
            name: modalNames.QUESTION_MODAL,
            data: data || {},
            closable: true,
        },
    };
};

export const OPEN_CONFIRM_MODAL = (data) => {
    return {
        type: modalTypes.OPEN_MODAL,
        payload: {
            name: modalNames.CONFIRM_MODAL,
            data: data || {},
            closable: true,
        },
    };
};

export const CLOSE_MODAL = () => {
    return {
        type: modalTypes.CLOSE_MODAL,
    };
};
