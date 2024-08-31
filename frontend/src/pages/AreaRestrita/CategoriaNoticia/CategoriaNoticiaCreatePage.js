import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createCategoriaNoticia } from "../../../store/actions/categoriaNoticiaActions";

function CategoriaNoticiaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);


    const handleSaveClick = () => {
        dispatch(createCategoriaNoticia({ nome: nome, descricao: descricao }));
        navigate("/categoriasnoticias");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da categoria de notícia",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da categoria de notícia",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Categoria de Notícia"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/categoriasnoticias"}
        />
    );
}

export default CategoriaNoticiaCreatePage;