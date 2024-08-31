import {
    CEP_FETCH_FAIL,
    CEP_FETCH_REQUEST,
    CEP_FETCH_RESET,
    CEP_FETCH_SUCCESS,
} from "../constants/cepConstants";

import { getCepData } from "../../services/external/cepService";

export const fetchCep = (cep) => async (dispatch) => {
    try {
        dispatch({ type: CEP_FETCH_REQUEST });

        const data = await getCepData(cep);

        dispatch({
            type: CEP_FETCH_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CEP_FETCH_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const resetCep = () => (dispatch) => {
    dispatch({ type: CEP_FETCH_RESET });
};
    