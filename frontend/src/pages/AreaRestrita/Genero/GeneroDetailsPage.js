import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getGeneroDetails, updateGenero } from "../../../store/actions/generoActions";

function GeneroDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const generoDetails = useSelector((state) => state.generoDetails);
    const { loading, error, genero } = generoDetails;

    const generoUpdate = useSelector((state) => state.generoUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = generoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getGeneroDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(genero.nome);
        setEditedDescricao(genero.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateGenero({
                id: id,
                nome: editedNome,
                descricao: editedDescricao,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome do gênero",
            value: editedNome,
            initialValue: genero.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do gênero",
            value: editedDescricao,
            initialValue: genero.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <>
            {loading || loadingUpdate ? (
                <Loader />
            ) : error || errorUpdate ? (
                <Message variant="danger">{error || errorUpdate}</Message>
            ) : (
                <DetailsComponent
                    title="Detalhes do Gênero"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                    backPath="/generos"
                />
            )}
        </>
    );
}

export default GeneroDetailsPage;
