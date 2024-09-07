import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getCategoriaAgendaDetails, updateCategoriaAgenda } from "../../../store/actions/categoriaAgendaActions";

function CategoriaAgendaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const categoriaAgendaDetails = useSelector((state) => state.categoriaAgendaDetails);
    const { loading, error, categoriaAgenda } = categoriaAgendaDetails;

    const categoriaAgendaUpdate = useSelector((state) => state.categoriaAgendaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoriaAgendaUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getCategoriaAgendaDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(categoriaAgenda.nome);
        setEditedDescricao(categoriaAgenda.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateCategoriaAgenda({
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
            placeholder: "Digite o nome da categoria de agenda",
            value: editedNome,
            initialValue: categoriaAgenda.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de agenda",
            value: editedDescricao,
            initialValue: categoriaAgenda.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Categoria de Agenda"
            fields={fields}
            handleEditClick={handleEditClick}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/categoriasagenda"}
        />
    );
}

export default CategoriaAgendaDetailsPage;