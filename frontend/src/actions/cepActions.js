import {
    FETCH_CEP_REQUEST,
    FETCH_CEP_SUCCESS,
    FETCH_CEP_FAIL,
} from "../constants/cepConstants";
import axios from "axios";

const cleanCep = (cep) => cep.replace(/\D/g, '');

export const fetchCep = (cep) => async (dispatch) => {
    try {

        const cleanedCep = cleanCep(cep);

        dispatch({ type: FETCH_CEP_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`, config);
        dispatch({ type: FETCH_CEP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: FETCH_CEP_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
