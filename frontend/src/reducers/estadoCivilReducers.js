import {
    ESTADO_CIVIL_LIST_REQUEST,
    ESTADO_CIVIL_LIST_SUCCESS,
    ESTADO_CIVIL_LIST_FAIL,
    ESTADO_CIVIL_DELETE_REQUEST,
    ESTADO_CIVIL_DELETE_SUCCESS,
    ESTADO_CIVIL_DELETE_FAIL,
} from "../constants/estadoCivilConstants";

export const estadoCivilListReducer = (
    state = { estadosCivis: [] },
    action
) => {
    switch (action.type) {
        case ESTADO_CIVIL_LIST_REQUEST:
            return { loading: true, estadosCivis: [] };
        case ESTADO_CIVIL_LIST_SUCCESS:
            return { loading: false, estadosCivis: action.payload };
        case ESTADO_CIVIL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const estadoCivilDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ESTADO_CIVIL_DELETE_REQUEST:
            return { loading: true };
        case ESTADO_CIVIL_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ESTADO_CIVIL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}