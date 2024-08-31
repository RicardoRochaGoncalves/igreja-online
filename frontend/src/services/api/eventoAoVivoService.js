import axios from "axios";

const API_URL = "/api/public/evento-ao-vivo/";

const listEventosAoVivo = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
}

const getEventoAoVivoDetails = async (id, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(`${API_URL}${id}/`, config);
    return response.data;
}

const createEventoAoVivo = async (eventoAoVivo, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}create/`, eventoAoVivo, config);
    return response.data;
}

const updateEventoAoVivo = async (eventoAoVivo, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(`${API_URL}update/${eventoAoVivo.id}/`, eventoAoVivo, config);
    return response.data;
}

const deleteEventoAoVivo = async (id, token) => {
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
    listEventosAoVivo,
    getEventoAoVivoDetails,
    createEventoAoVivo,
    updateEventoAoVivo,
    deleteEventoAoVivo,
};
