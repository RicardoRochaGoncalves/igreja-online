import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEstadoCivilDetails, updateEstadoCivil } from "../actions/estadoCivilActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import DetailsComponent from "../components/DetailsComponent";
import { useParams } from "react-router-dom";

function EstadoCivilDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const estadoCivilDetailsState = useSelector(
        (state) => state.estadoCivilDetails
    );
    const { loading, error, estadoCivil } = estadoCivilDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");

    useEffect(() => {
        dispatch(listEstadoCivilDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(estadoCivil.nome);

    };

    const handleSaveClick = () => {
        dispatch(
            updateEstadoCivil({
                id: id,
                nome: editedNome,

            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o estado civil",
            value: editedNome,
            initialValue: estadoCivil.nome,
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
                    title="Estado Civil"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default EstadoCivilDetailsScreen;
