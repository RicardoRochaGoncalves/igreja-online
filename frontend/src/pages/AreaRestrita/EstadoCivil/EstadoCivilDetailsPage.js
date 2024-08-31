import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getEstadoCivilDetails, updateEstadoCivil } from "../../../store/actions/estadoCivilActions";

function EstadoCivilDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const estadoCivilDetails = useSelector((state) => state.estadoCivilDetails);
    const { loading, error, estadoCivil } = estadoCivilDetails;

    const estadoCivilUpdate = useSelector((state) => state.estadoCivilUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = estadoCivilUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getEstadoCivilDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(estadoCivil.nome);
        setEditedDescricao(estadoCivil.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateEstadoCivil({
                id: id,
                nome: editedNome,
                descricao: editedDescricao
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome do estado civil",
            value: editedNome,
            initialValue: estadoCivil.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do estado civil",
            value: editedDescricao,
            initialValue: estadoCivil.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Estado Civil"
            handleEditClick={handleEditClick}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            fields={fields}
            backPath="/estadoscivis"
        />
    );
}

export default EstadoCivilDetailsPage;

