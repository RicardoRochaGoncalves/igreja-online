import {
    CATEGORIA_PESSOA_LIST_FAIL,
    CATEGORIA_PESSOA_CREATE_FAIL,
    CATEGORIA_PESSOA_CREATE_REQUEST,
    CATEGORIA_PESSOA_CREATE_RESET,
    CATEGORIA_PESSOA_CREATE_SUCCESS,
    CATEGORIA_PESSOA_DELETE_FAIL,
    CATEGORIA_PESSOA_DELETE_REQUEST,
    CATEGORIA_PESSOA_DELETE_SUCCESS,
    CATEGORIA_PESSOA_DETAILS_FAIL,
    CATEGORIA_PESSOA_DETAILS_REQUEST,
    CATEGORIA_PESSOA_DETAILS_SUCCESS,
    CATEGORIA_PESSOA_LIST_REQUEST,
    CATEGORIA_PESSOA_LIST_SUCCESS,
    CATEGORIA_PESSOA_UPDATE_FAIL,
    CATEGORIA_PESSOA_UPDATE_REQUEST,
    CATEGORIA_PESSOA_UPDATE_RESET,
    CATEGORIA_PESSOA_UPDATE_SUCCESS,
} from "../constants/categoriaPessoaConstants";
import categoriaPessoaService from "../../services/api/categoriaPessoaService";

export const listCategoriasPessoa = () => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_PESSOA_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriasPessoa =
            await categoriaPessoaService.listCategoriasPessoa(userInfo.token);

        dispatch({
            type: CATEGORIA_PESSOA_LIST_SUCCESS,
            payload: categoriasPessoa,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_PESSOA_LIST_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const getCategoriaPessoaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_PESSOA_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const categoriaPessoa =
            await categoriaPessoaService.getCategoriaPessoaDetails(
                id,
                userInfo.token
            );

        dispatch({
            type: CATEGORIA_PESSOA_DETAILS_SUCCESS,
            payload: categoriaPessoa,
        });
    } catch (error) {
        dispatch({
            type: CATEGORIA_PESSOA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const createCategoriaPessoa =
    (categoriaPessoa) => async (dispatch, getState) => {
        try {
            dispatch({ type: CATEGORIA_PESSOA_CREATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const createdCategoriaPessoa =
                await categoriaPessoaService.createCategoriaPessoa(
                    categoriaPessoa,
                    userInfo.token
                );

            dispatch({
                type: CATEGORIA_PESSOA_CREATE_SUCCESS,
                payload: createdCategoriaPessoa,
            });
        } catch (error) {
            dispatch({
                type: CATEGORIA_PESSOA_CREATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const updateCategoriaPessoa =
    (categoriaPessoa) => async (dispatch, getState) => {
        try {
            dispatch({ type: CATEGORIA_PESSOA_UPDATE_REQUEST });

            const {
                userLogin: { userInfo },
            } = getState();

            const updatedCategoriaPessoa =
                await categoriaPessoaService.updateCategoriaPessoa(
                    categoriaPessoa,
                    userInfo.token
                );

            dispatch({
                type: CATEGORIA_PESSOA_UPDATE_SUCCESS,
                payload: updatedCategoriaPessoa,
            });
        } catch (error) {
            dispatch({
                type: CATEGORIA_PESSOA_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.detail
                        ? error.response.data.detail
                        : error.message,
            });
        }
    };

export const deleteCategoriaPessoa = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORIA_PESSOA_DELETE_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        await categoriaPessoaService.deleteCategoriaPessoa(id, userInfo.token);

        dispatch({ type: CATEGORIA_PESSOA_DELETE_SUCCESS });
    } catch (error) {
        dispatch({
            type: CATEGORIA_PESSOA_DELETE_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
