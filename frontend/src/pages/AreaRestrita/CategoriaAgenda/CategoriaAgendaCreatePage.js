import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createCategoriaAgenda } from "../../../store/actions/categoriaAgendaActions";

function CategoriaAgendaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);


    const handleSaveClick = () => {
        dispatch(createCategoriaAgenda({ nome: nome, descricao: descricao }));
        navigate("/categoriasagendas");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da categoria de agenda",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de agenda",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Categoria de Agenda"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/categoriasagendas"}
        />
    );
}

export default CategoriaAgendaCreatePage;