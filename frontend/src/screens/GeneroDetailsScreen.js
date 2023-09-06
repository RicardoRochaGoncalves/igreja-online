import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listGeneroDetails, updateGenero } from "../actions/generoActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import DetailsComponent from "../components/DetailsComponent";
import { useParams } from "react-router-dom";

function GeneroDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const generoDetailsState = useSelector(
        (state) => state.generoDetails
    );
    const { loading, error, genero } = generoDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");

    useEffect(() => {
        dispatch(listGeneroDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(genero.nome);
    };

    const handleSaveClick = () => {
        dispatch(
            updateGenero({
                id: id,
                nome: editedNome,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome da genero",
            placeholder: "Nome da genero",
            value: editedNome,
            initialValue: genero.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <DetailsComponent
                    title="Genero"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default GeneroDetailsScreen;
