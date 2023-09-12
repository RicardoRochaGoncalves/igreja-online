import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPessoaDetails, updatePessoa } from "../../actions/pessoaActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";
import DatePickerComponent from "../../components/DatePickerComponent";
import { listCategorias } from "../../actions/categoriaActions";
import { listProfissoes } from "../../actions/profissaoActions";
import { listEstadosCivis } from "../../actions/estadoCivilActions";
import { listGeneros } from "../../actions/generoActions";
import { listEnderecos } from "../../actions/enderecoActions";
import SelectFieldComponent from "../../components/SelectFieldComponent";


function PessoaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pessoaDetailsState = useSelector(
        (state) => state.pessoaDetails
    );
    const { loading, error, pessoa } = pessoaDetailsState;
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
        dispatch(listCategorias());
        dispatch(listProfissoes());
        dispatch(listEstadosCivis());
        dispatch(listGeneros());
        dispatch(listEnderecos());

        if (pessoa.dataNascimento) {
            setEditedDataNascimento(new Date(pessoa.dataNascimento));
        }
    }, [dispatch, id, pessoa.dataNascimento]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(pessoa.nome);
        setEditedDataNascimento(new Date(pessoa.dataNascimento));
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

    const handleDateChange = (date) => {
        if (isEditing){
            setEditedDataNascimento(date);
        }
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
            component: (
                <DatePickerComponent
                    dataSelecionada={editedDataNascimento} 
                    onChange={handleDateChange}
                />
            ),
        },
        {
            label: "Endereço",
            component: (
                <SelectFieldComponent
                    options={enderecos}
                    initialValue={pessoa.endereco}
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
                    options={categorias}
                    initialValue={pessoa.categoria}
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
                    options={profissoes}
                    initialValue={pessoa.profissao}
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
                    options={estadosCivis}
                    initialValue={pessoa.estadoCivil}
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
            component: (
                <SelectFieldComponent
                    options={generos}
                    initialValue={pessoa.genero}
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
            onChange: (e) => setEditedObservacao(e.target.value),
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
                    title="Pessoa"
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
