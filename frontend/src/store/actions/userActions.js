import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_RESET,
    USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import userService from "../../services/api/userService";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const userInfo = await userService.login(email, password);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userInfo,
        });

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    await userService.logout();
    dispatch({ type: USER_LOGOUT });
};

export const register = (nome, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const userInfo = await userService.register(nome, email, password);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userInfo,
        });

        // Log the user in immediately after registration
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userInfo,
        });

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        dispatch({
            type: USER_REGISTER_RESET,
        });
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
        });
    }
};
