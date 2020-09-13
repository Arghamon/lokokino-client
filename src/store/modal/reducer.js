import { modalTypes } from './actions';

const initialState = {
    name: null,
    data: {},
    closable: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case modalTypes.OPEN_MODAL:
            return {
                ...state, name: action.payload.name,
                data: action.payload.data,
                closable: action.payload.closable
            };
        case modalTypes.CLOSE_MODAL:
            return { ...state, name: null, data: null, };
        default:
            return { ...state };
    }
};

export default reducer;
