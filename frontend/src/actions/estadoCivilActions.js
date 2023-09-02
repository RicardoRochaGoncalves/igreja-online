import {
    ESTADO_CIVIL_LIST_REQUEST,
    ESTADO_CIVIL_LIST_SUCCESS,
    ESTADO_CIVIL_LIST_FAIL,
    ESTADO_CIVIL_DELETE_REQUEST,
    ESTADO_CIVIL_DELETE_SUCCESS,
    ESTADO_CIVIL_DELETE_FAIL,
} from "../constants/estadoCivilConstants";

import axios from "axios";

export const listEstadosCivis = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ESTADO_CIVIL_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/estadoscivis`, config);
        dispatch({ type: ESTADO_CIVIL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const deleteEstadoCivil = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ESTADO_CIVIL_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const {data} = await axios.delete(`/api/estadoscivis/delete/${id}`, config);

        dispatch({
            type: ESTADO_CIVIL_DELETE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ESTADO_CIVIL_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}