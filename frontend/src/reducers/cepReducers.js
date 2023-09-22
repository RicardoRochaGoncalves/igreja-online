import {FETCH_CEP_REQUEST, FETCH_CEP_SUCCESS, FETCH_CEP_FAIL} from '../constants/cepConstants';

export const cepFectchReducer = (state = { cep: {} }, action) => {
    switch (action.type) {
        case FETCH_CEP_REQUEST:
            return { ...state, loading: true };
        case FETCH_CEP_SUCCESS:
            return { loading: false, cepFetched: action.payload };
        case FETCH_CEP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}