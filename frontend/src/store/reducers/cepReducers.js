import {
    CEP_FETCH_REQUEST,
    CEP_FETCH_SUCCESS,
    CEP_FETCH_FAIL,
    CEP_FETCH_RESET
} from "../constants/cepConstants";

export const cepFetchReducer = (state = {}, action) => {
    switch (action.type) {
        case CEP_FETCH_REQUEST:
            return { loading: true };
        case CEP_FETCH_SUCCESS:
            return { loading: false, cepFetched: action.payload };
        case CEP_FETCH_FAIL:
            return { loading: false, error: action.payload };
        case CEP_FETCH_RESET:
            return {};
        default:
            return state;
    }
}