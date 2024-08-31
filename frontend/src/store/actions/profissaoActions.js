import {
    PROFISSAO_CREATE_FAIL,
    PROFISSAO_CREATE_REQUEST,
    PROFISSAO_CREATE_RESET,
    PROFISSAO_CREATE_SUCCESS,
    PROFISSAO_DELETE_FAIL,
    PROFISSAO_DELETE_REQUEST,
    PROFISSAO_DELETE_SUCCESS,
    PROFISSAO_DETAILS_FAIL,
    PROFISSAO_DETAILS_REQUEST,
    PROFISSAO_DETAILS_SUCCESS,
    PROFISSAO_LIST_FAIL,
    PROFISSAO_LIST_REQUEST,
    PROFISSAO_LIST_SUCCESS,
    PROFISSAO_UPDATE_FAIL,
    PROFISSAO_UPDATE_REQUEST,
    PROFISSAO_UPDATE_RESET,
    PROFISSAO_UPDATE_SUCCESS,
} from "../constants/profissaoConstants";
import profissaoService from "../../services/api/profissaoService";

export const listProfissoes = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const profissoes = await profissaoService.listProfissoes(
            userInfo.token
        );

        dispatch({
            type: PROFISSAO_LIST_SUCCESS,
            payload: profissoes,
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getProfissaoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const profissao = await profissaoService.getProfissaoDetails(
            id,
            userInfo.token
        );

        dispatch({
            type: PROFISSAO_DETAILS_SUCCESS,
            payload: profissao,
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createProfissao = (nome) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_CREATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const profissao = await profissaoService.createProfissao(
            nome,
            userInfo.token
        );

        dispatch({
            type: PROFISSAO_CREATE_SUCCESS,
            payload: profissao,
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_CREATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const updateProfissao = (profissao) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_UPDATE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const updatedProfissao = await profissaoService.updateProfissao(
            profissao,
            userInfo.token
        );

        dispatch({
            type: PROFISSAO_UPDATE_SUCCESS,
            payload: updatedProfissao,
        });
    } catch (error) {
        dispatch({
            type: PROFISSAO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const deleteProfissao = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROFISSAO_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await profissaoService.deleteProfissao(id, userInfo.token);

        dispatch({ type: PROFISSAO_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: PROFISSAO_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
