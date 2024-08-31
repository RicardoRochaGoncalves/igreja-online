import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getCategoriaNoticiaDetails, updateCategoriaNoticia } from "../../../store/actions/categoriaNoticiaActions";

function CategoriaNoticiaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const categoriaNoticiaDetails = useSelector((state) => state.categoriaNoticiaDetails);
    const { loading, error, categoriaNoticia } = categoriaNoticiaDetails;

    const categoriaNoticiaUpdate = useSelector((state) => state.categoriaNoticiaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoriaNoticiaUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getCategoriaNoticiaDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(categoriaNoticia.nome);
        setEditedDescricao(categoriaNoticia.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateCategoriaNoticia({
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
            placeholder: "Digite o nome da categoria de notícia",
            value: editedNome,
            initialValue: categoriaNoticia.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de notícia",
            value: editedDescricao,
            initialValue: categoriaNoticia.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Categoria de Notícia"
            handleEditClick={handleEditClick}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            fields={fields}
            backPath="/categoriasnoticias"
        />
    );
}

export default CategoriaNoticiaDetailsPage;
