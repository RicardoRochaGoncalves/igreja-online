import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createEstadoCivil } from "../../../store/actions/estadoCivilActions";

function EstadoCivilCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing] = useState(true);


    const handleSaveClick = () => {
        dispatch(createEstadoCivil({ nome: nome, descricao: descricao }));
        navigate("/estadoscivis");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome do estado civil",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do estado civil",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Estado Civil"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath="/estadoscivis"
        />
    );
}

export default EstadoCivilCreatePage;