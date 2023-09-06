import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPessoaDetails, updatePessoa } from "../actions/pessoaActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import DetailsComponent from "../components/DetailsComponent";
import { useParams } from "react-router-dom";

function PessoaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pessoaDetailsState = useSelector(
        (state) => state.pessoaDetails
    );
    const { loading, error, pessoa } = pessoaDetailsState;

    const [isEditing, setIsEditing] = useState(false);
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


    useEffect(() => {
        dispatch(listPessoaDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(pessoa.nome);
        setEditedDataNascimento(pessoa.dataNascimento);
        setEditedEndereco(pessoa.endereco);
        setEditedCategoria(pessoa.categoria);
        setEditedProfissao(pessoa.profissao);
        setEditedEstadoCivil(pessoa.estadoCivil);
        setEditedRG(pessoa.RG);
        setEditedCPF(pessoa.CPF);
        setEditedTelefone(pessoa.telefone);
        setEditedGenero(pessoa.genero);
        setEditedAtivo(pessoa.ativo);
        setEditedBatizado(pessoa.batizado);
        setEditedObservacao(pessoa.observacao);
    };

    const handleSaveClick = () => {
        dispatch(
            updatePessoa({
                id: id,
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
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome da pessoa",
            placeholder: "Nome da pessoa",
            value: editedNome,
            initialValue: pessoa.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Data de Nascimento",
            placeholder: "Data de Nascimento",
            value: editedDataNascimento,
            initialValue: pessoa.dataNascimento,
            onChange: (e) => setEditedDataNascimento(e.target.value),
        },
        {
            label: "Endereço",
            placeholder: "Endereço",
            value: editedEndereco,
            initialValue: pessoa.endereco,
            onChange: (e) => setEditedEndereco(e.target.value),
        },
        {
            label: "Categoria",
            placeholder: "Categoria",
            value: editedCategoria,
            initialValue: pessoa.categoria,
            onChange: (e) => setEditedCategoria(e.target.value),
        },
        {
            label: "Profissão",
            placeholder: "Profissão",
            value: editedProfissao,
            initialValue: pessoa.profissao,
            onChange: (e) => setEditedProfissao(e.target.value),
        },
        {
            label: "Estado Civil",
            placeholder: "Estado Civil",
            value: editedEstadoCivil,
            initialValue: pessoa.estadoCivil,
            onChange: (e) => setEditedEstadoCivil(e.target.value),
        },
        {
            label: "RG",
            placeholder: "RG",
            value: editedRG,
            initialValue: pessoa.RG,
            onChange: (e) => setEditedRG(e.target.value),
        },
        {
            label: "CPF",
            placeholder: "CPF",
            value: editedCPF,
            initialValue: pessoa.CPF,
            onChange: (e) => setEditedCPF(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Telefone",
            value: editedTelefone,
            initialValue: pessoa.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Genero",
            placeholder: "Genero",
            value: editedGenero,
            initialValue: pessoa.genero,
            onChange: (e) => setEditedGenero(e.target.value),
        },
        {
            label: "Ativo",
            placeholder: "Ativo",
            value: editedAtivo,
            initialValue: pessoa.ativo,
            onChange: (e) => setEditedAtivo(e.target.value),
        },
        {
            label: "Batizado",
            placeholder: "Batizado",
            value: editedBatizado,
            initialValue: pessoa.batizado,
            onChange: (e) => setEditedBatizado(e.target.value),
        },
        {
            label: "Observacao",
            placeholder: "Observacao",
            value: editedObservacao,
            initialValue: pessoa.observacao,
            onChange: (e) => setEditedObservacao
        },
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <DetailsComponent
                    title="pessoa"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default PessoaDetailsScreen;
