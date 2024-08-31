import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getCategoriaPessoaDetails, updateCategoriaPessoa } from "../../../store/actions/categoriaPessoaActions";

function CategoriaPessoaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const categoriaPessoaDetails = useSelector((state) => state.categoriaPessoaDetails);
    const { loading, error, categoriaPessoa } = categoriaPessoaDetails;

    const categoriaPessoaUpdate = useSelector((state) => state.categoriaPessoaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = categoriaPessoaUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getCategoriaPessoaDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(categoriaPessoa.nome);
        setEditedDescricao(categoriaPessoa.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateCategoriaPessoa({
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
            placeholder: "Digite o nome da categoria de pessoa",
            value: editedNome,
            initialValue: categoriaPessoa.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de pessoa",
            value: editedDescricao,
            initialValue: categoriaPessoa.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Categoria de Pessoa"
            handleEditClick={handleEditClick}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            fields={fields}
            backPath="/categoriaspessoas"
        />
    );
}

export default CategoriaPessoaDetailsPage;
