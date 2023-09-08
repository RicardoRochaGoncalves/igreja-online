import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createIgreja } from "../../actions/igrejaActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function IgrejaCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(true);
    const [editedNomeFantasia, setEditedNomeFantasia] = useState("");
    const [editedRazaoSocial, setEditedRazaoSocial] = useState("");
    const [editedCnpj, setEditedCnpj] = useState("");
    const [editedDataCadastro, setEditedDataCadastro] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedigreja, setEditedigreja] = useState("");

    const handleSaveClick = () => {
        dispatch(
            createIgreja({
                nomeFantasia: editedNomeFantasia,
                razaoSocial: editedRazaoSocial,
                CNPJ: editedCnpj,
                dataCadastro: editedDataCadastro,
                telefone: editedTelefone,
                igreja: editedigreja,
                endereco: editedigreja,
            })
        );

        navigate("/igrejas");
    };

    const fields = [
        {
            label: "Nome Fantasia da igreja",
            placeholder: "Nome Fantasia da igreja",
            value: editedNomeFantasia,
            onChange: (e) => setEditedNomeFantasia(e.target.value),
        },
        {
            label: "Razão Social",
            placeholder: "Razão Social",
            value: editedRazaoSocial,
            onChange: (e) => setEditedRazaoSocial(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "CNPJ",
            value: editedCnpj,
            onChange: (e) => setEditedCnpj(e.target.value),
        },
        {
            label: "Data de Cadastro",
            placeholder: "Data de Cadastro",
            value: editedDataCadastro,
            onChange: (e) => setEditedDataCadastro(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Telefone",
            value: editedTelefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Endereço",
            placeholder: "Endereço",
            value: editedigreja,
            onChange: (e) => setEditedigreja(e.target.value),
        },
    ];

    return (
        <div>
            <DetailsComponent
                title="Nova igreja"
                isEditing={isEditing}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
        </div>
    );
}

export default IgrejaCreateScreen;
