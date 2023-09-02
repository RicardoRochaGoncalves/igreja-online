import {
    IGREJA_LIST_REQUEST,
    IGREJA_LIST_SUCCESS,
    IGREJA_LIST_FAIL,
    IGREJA_DELETE_REQUEST,
    IGREJA_DELETE_SUCCESS,
    IGREJA_DELETE_FAIL,
} from "../constants/igrejaConstants";

export const igrejaListReducer = (state = { igrejas: [] }, action) => {
    switch (action.type) {
        case IGREJA_LIST_REQUEST:
            return { loading: true, igrejas: [] };
        case IGREJA_LIST_SUCCESS:
            return { loading: false, igrejas: action.payload };
        case IGREJA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const igrejaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case IGREJA_DELETE_REQUEST:
            return { loading: true };
        case IGREJA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case IGREJA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}