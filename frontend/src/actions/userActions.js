import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from "../constants/userConstants"; 
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            "/api/users/login/",
            { username:email, password:password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data, // data is the user object returned from the backend
        })

        localStorage.setItem("userInfo", JSON.stringify(data)) // save the user object in local storage

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? 
                error.response.data.message : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo") // remove the user object from local storage
    dispatch({ type: USER_LOGOUT })
}