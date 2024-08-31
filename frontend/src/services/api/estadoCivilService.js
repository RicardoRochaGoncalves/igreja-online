import axios from "axios";

const API_URL = "/api/area-restrita/estado-civil/";

const listEstadosCivis = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getEstadoCivilDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createEstadoCivil = async (estadoCivil, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, estadoCivil, config);
    return response.data;
}

const updateEstadoCivil = async (estadoCivil, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${estadoCivil.id}/`, estadoCivil, config);
    return response.data;
}

const deleteEstadoCivil = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(`${API_URL}delete/${id}/`, config);
    return response.data;
}

export default{
    listEstadosCivis,
    getEstadoCivilDetails,
    createEstadoCivil,
    updateEstadoCivil,
    deleteEstadoCivil,
};