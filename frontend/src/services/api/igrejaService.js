import axios from "axios";

const API_URL = "/api/area-restrita/igreja/";

const listIgrejas = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

const getIgrejaDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
};

const createIgreja = async (igreja, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, igreja, config);
    return response.data;
};

const updateIgreja = async (igreja, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(
        `${API_URL}update/${igreja.id}/`,
        igreja,
        config
    );
    return response.data;
};

const deleteIgreja = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${API_URL}delete/${id}`, config);
    return response.data;
};

export default{
    listIgrejas,
    getIgrejaDetails,
    createIgreja,
    updateIgreja,
    deleteIgreja,
};
