import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPessoa } from "../../actions/pessoaActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "../../components/DatePickerComponent";

function PessoaCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(true); // Inicialmente, permita a edição
    const [editedNome, setEditedNome] = useState("");
    const [editedDataNascimento, setEditedDataNascimento] = useState("");
    const [editedEndereco, setEditedEndereco] = useState("");
    const [editedCategoria, setEditedCategoria] = useState("");
    const [editedProfissao, setEditedProfissao] = useState("");
    const [editedEstadoCivil, setEditedEstadoCivil] = useState("");
    const [editedRG, setEditedRG] = useState("");
    const [editedCPF, setEditedCPF] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedGenero, setEditedGenero] = useState("");
    const [editedAtivo, setEditedAtivo] = useState("");
    const [editedBatizado, setEditedBatizado] = useState("");
    const [editedObservacao, setEditedObservacao] = useState("");

    const handleDateChange = (date) => {
        setEditedDataNascimento(date);
    };

    const handleSaveClick = () => {
        dispatch(
            createPessoa({
                nome: editedNome,
                dataNascimento: editedDataNascimento,
                endereco: editedEndereco,
                categoria: editedCategoria,
                profissao: editedProfissao,
                estadoCivil: editedEstadoCivil,
                RG: editedRG,
                CPF: editedCPF,
                telefone: editedTelefone,
                genero: editedGenero,
                ativo: editedAtivo,
                batizado: editedBatizado,
                observacao: editedObservacao,
            })
        );

        navigate("/pessoas");
    };

    const fields = [
        {
            label: "Nome da pessoa",
            placeholder: "Nome da pessoa",
            value: editedNome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Data de Nascimento",
            placeholder: "Data de Nascimento",
            value: editedDataNascimento,
            component: (
                <DatePickerComponent
                    dataSelecionada={editedDataNascimento} 
                    onChange={handleDateChange}
                />
            ),
        },
        {
            label: "Endereço",
            placeholder: "Endereço",
            value: editedEndereco,
            onChange: (e) => setEditedEndereco(e.target.value),
        },
        {
            label: "Categoria",
            placeholder: "Categoria",
            value: editedCategoria,
            onChange: (e) => setEditedCategoria(e.target.value),
        },
        {
            label: "Profissão",
            placeholder: "Profissão",
            value: editedProfissao,
            onChange: (e) => setEditedProfissao(e.target.value),
        },
        {
            label: "Estado Civil",
            placeholder: "Estado Civil",
            value: editedEstadoCivil,
            onChange: (e) => setEditedEstadoCivil(e.target.value),
        },
        {
            label: "RG",
            placeholder: "RG",
            value: editedRG,
            onChange: (e) => setEditedRG(e.target.value),
        },
        {
            label: "CPF",
            placeholder: "CPF",
            value: editedCPF,
            onChange: (e) => setEditedCPF(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Telefone",
            value: editedTelefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Genero",
            placeholder: "Genero",
            value: editedGenero,
            onChange: (e) => setEditedGenero(e.target.value),
        },
        {
            label: "Ativo",
            placeholder: "Ativo",
            value: editedAtivo,
            onChange: (e) => setEditedAtivo(e.target.value),
        },
        {
            label: "Batizado",
            placeholder: "Batizado",
            value: editedBatizado,
            onChange: (e) => setEditedBatizado(e.target.value),
        },
        {
            label: "Observacao",
            placeholder: "Observacao",
            value: editedObservacao,
            onChange: (e) => setEditedObservacao(e.target.value),
        },
    ];

    return (
        <div>
            <DetailsComponent
                title="Nova pessoa"
                isEditing={isEditing}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
        </div>
    );
}

export default PessoaCreateScreen;
