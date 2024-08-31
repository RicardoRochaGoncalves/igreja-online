import axios from 'axios';

const API_URL = '/api/users/';

const login = async (email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(API_URL + 'login/', { username:email, password:password }, config);
    return response.data;
}

const logout = async () => {
    localStorage.removeItem('userInfo');
}

const register = async (nome, email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await axios.post(API_URL + 'register/', { nome:nome, email: email, password: password }, config);
    return response.data;
}

export default {
    login,
    logout,
    register,
};
