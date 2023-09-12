import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPessoa } from "../../actions/pessoaActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "../../components/DatePickerComponent";
import SelectFieldComponent from "../../components/SelectFieldComponent";
import { listCategorias } from "../../actions/categoriaActions";
import { listProfissoes } from "../../actions/profissaoActions";
import { listEstadosCivis } from "../../actions/estadoCivilActions";
import { listGeneros } from "../../actions/generoActions";
import { listEnderecos } from "../../actions/enderecoActions";

function PessoaCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriaList = useSelector((state) => state.categoriaList);
    const { categorias } = categoriaList;

    const profissaoList = useSelector((state) => state.profissaoList);
    const { profissoes } = profissaoList;

    const estadoCivilList = useSelector((state) => state.estadoCivilList);
    const { estadosCivis } = estadoCivilList;

    const generoList = useSelector((state) => state.generoList);
    const { generos } = generoList;

    const enderecoList = useSelector((state) => state.enderecoList);
    const { enderecos } = enderecoList;

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

    useEffect(() => {
        dispatch(listCategorias());
        dispatch(listProfissoes());
        dispatch(listEstadosCivis());
        dispatch(listGeneros());
        dispatch(listEnderecos());
    }, [dispatch]);

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
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um endereço" },
                        ...enderecos,
                    ]}
                    value={editedEndereco}
                    onChange={(e) => setEditedEndereco(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Categoria",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma categoria" },
                        ...categorias,
                    ]}
                    value={editedCategoria}
                    onChange={(e) => setEditedCategoria(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Profissão",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma profissão" },
                        ...profissoes,
                    ]}
                    value={editedProfissao}
                    onChange={(e) => setEditedProfissao(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Estado Civil",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um estado civil" },
                        ...estadosCivis,
                    ]}
                    value={editedEstadoCivil}
                    onChange={(e) => setEditedEstadoCivil(e.target.value)}
                    isEditing={isEditing}
                />
            ),
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
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um genero" },
                        ...generos,
                    ]}
                    value={editedGenero}
                    onChange={(e) => setEditedGenero(e.target.value)}
                    isEditing={isEditing}
                />
            ),
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
