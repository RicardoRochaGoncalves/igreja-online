import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createCategoriaPessoa } from "../../../store/actions/categoriaPessoaActions";

function CategoriaPessoaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);


    const handleSaveClick = () => {
        dispatch(createCategoriaPessoa({ nome: nome, descricao: descricao }));
        navigate("/categoriaspessoas");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da categoria de pessoa",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de pessoa",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Categoria de Pessoa"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default CategoriaPessoaCreatePage;