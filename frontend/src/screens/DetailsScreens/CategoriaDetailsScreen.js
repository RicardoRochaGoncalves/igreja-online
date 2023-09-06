import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategoriaDetails, updateCategoria } from "../../actions/categoriaActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

function CategoriaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const categoriaDetailsState = useSelector(
        (state) => state.categoriaDetails
    );
    const { loading, error, categoria } = categoriaDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listCategoriaDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(categoria.nome);
        setEditedDescricao(categoria.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateCategoria({
                id: id,
                nome: editedNome,
                descricao: editedDescricao,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome da Categoria",
            placeholder: "Nome da Categoria",
            value: editedNome,
            initialValue: categoria.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição da Categoria",
            placeholder: "Descrição da Categoria",
            value: editedDescricao,
            initialValue: categoria.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
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
                    title="Categoria"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default CategoriaDetailsScreen;
