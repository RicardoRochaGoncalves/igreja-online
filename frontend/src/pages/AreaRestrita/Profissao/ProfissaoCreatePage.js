import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createProfissao } from "../../../store/actions/profissaoActions";

function ProfissaoCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);

    useEffect(() => {}, []);

    const handleSaveClick = () => {
        dispatch(createProfissao({ nome: nome, descricao: descricao }));
        navigate("/profissoes");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da profissão",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da profissão",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Profissão"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default ProfissaoCreatePage;