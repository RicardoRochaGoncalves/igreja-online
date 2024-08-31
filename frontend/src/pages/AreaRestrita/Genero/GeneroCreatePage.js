import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createGenero } from "../../../store/actions/generoActions";

function GeneroCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(createGenero({ nome: nome, descricao: descricao }));
        navigate("/generos");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome do gênero",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do gênero",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Gênero"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/generos"}
        />
    );
}

export default GeneroCreatePage;
