import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getPessoaDetails, updatePessoa } from "../../../store/actions/pessoaActions";

import { listGeneros } from "../../../store/actions/generoActions";
import { listIgrejas } from "../../../store/actions/igrejaActions";
import { listCategoriasPessoa } from "../../../store/actions/categoriaPessoaActions";
import { listEstadosCivis } from "../../../store/actions/estadoCivilActions";
import { listProfissoes } from "../../../store/actions/profissaoActions";

import SelectFieldComponent from "../../../components/SelectFieldComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import { fetchCep } from "../../../store/actions/cepActions";
import CepField from "../../../components/CepField";



function PessoaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const pessoaDetails = useSelector((state) => state.pessoaDetails);
    const { loading, error, pessoa } = pessoaDetails;

    const pessoaUpdate = useSelector((state) => state.pessoaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = pessoaUpdate;


    const generoList = useSelector((state) => state.generoList);
    const { generos } = generoList;

    const igrejaList = useSelector((state) => state.igrejaList);
    const { igrejas } = igrejaList;

    const categoriaPessoaList = useSelector((state) => state.categoriaPessoaList);
    const { categoriasPessoa } = categoriaPessoaList;

    const estadoCivilList = useSelector((state) => state.estadoCivilList);
    const { estadosCivis } = estadoCivilList;

    const profissaoList = useSelector((state) => state.profissaoList);
    const { profissoes } = profissaoList;
    
    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedSobrenome, setEditedSobrenome] = useState("");
    const [editedDataNascimento, setEditedDataNascimento] = useState("");
    const [editedCpf, setEditedCpf] = useState("");
    const [editedRg, setEditedRg] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedCategoriaPessoa, setEditedCategoriaPessoa] = useState("");
    const [editedProfissao, setEditedProfissao] = useState("");
    const [editedEstadoCivil, setEditedEstadoCivil] = useState("");
    const [editedGenero, setEditedGenero] = useState("");
    const [editedIgreja, setEditedIgreja] = useState("");
    const [editedCep, setEditedCep] = useState("");
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");
    const [editedAtivo, setEditedAtivo] = useState("");

    useEffect(() => {
        dispatch(listGeneros());
        dispatch(listIgrejas());
        dispatch(listCategoriasPessoa());
        dispatch(listEstadosCivis());
        dispatch(listProfissoes());
        dispatch(getPessoaDetails(id));
        if(cepFetched) {
            setEditedLogradouro(cepFetched.logradouro);
            setEditedBairro(cepFetched.bairro);
            setEditedCidade(cepFetched.localidade);
            setEditedEstado(cepFetched.uf);
        }
    }, [dispatch, id, successUpdate, cepFetched]);

    useEffect(() => {
        if (pessoa) {
            setEditedNome(pessoa.nome);
            setEditedSobrenome(pessoa.sobrenome);
            setEditedDataNascimento(pessoa.data_nascimento);
            setEditedCpf(pessoa.cpf);
            setEditedRg(pessoa.rg);
            setEditedTelefone(pessoa.telefone);
            setEditedEmail(pessoa.email);
            setEditedCategoriaPessoa(pessoa.categoriaPessoa);
            setEditedProfissao(pessoa.profissao);
            setEditedEstadoCivil(pessoa.estado_civil);
            setEditedGenero(pessoa.genero);
            setEditedIgreja(pessoa.igreja);
            setEditedAtivo(pessoa.ativo);
        }
    }, [pessoa]);


    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(pessoa.nome);
        setEditedSobrenome(pessoa.sobrenome);
        setEditedDataNascimento(pessoa.data_nascimento);
        setEditedCpf(pessoa.cpf);
        setEditedRg(pessoa.rg);
        setEditedTelefone(pessoa.telefone);
        setEditedEmail(pessoa.email);
        setEditedCategoriaPessoa(pessoa.categoriaPessoa);
        setEditedProfissao(pessoa.profissao);
        setEditedEstadoCivil(pessoa.estado_civil);
        setEditedGenero(pessoa.genero);
        setEditedIgreja(pessoa.igreja);
        setEditedCep(pessoa.cep);
        setEditedLogradouro(pessoa.logradouro);
        setEditedNumero(pessoa.numero);
        setEditedComplemento(pessoa.complemento);
        setEditedBairro(pessoa.bairro);
        setEditedCidade(pessoa.cidade);
        setEditedEstado(pessoa.estado);
        setEditedAtivo(pessoa.ativo);
    };

    const handleSaveClick = () => {
        dispatch(
            updatePessoa({
                id: id,
                nome: editedNome,
                sobrenome: editedSobrenome,
                data_nascimento: editedDataNascimento,
                cpf: editedCpf,
                rg: editedRg,
                telefone: editedTelefone,
                email: editedEmail,
                categoria_pessoa: editedCategoriaPessoa,
                profissao: editedProfissao,
                estado_civil: editedEstadoCivil,
                genero: editedGenero,
                igreja: editedIgreja,
                cep: editedCep,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
                ativo: editedAtivo,
            })
        );
        setIsEditing(false);
    }

    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCep));
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da pessoa",
            value: editedNome,
            initialValue: pessoa.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Sobrenome",
            placeholder: "Digite o sobrenome da pessoa",
            value: editedSobrenome,
            initialValue: pessoa.sobrenome,
            onChange: (e) => setEditedSobrenome(e.target.value),
        },
        {
            label: "Data",
            component: (
                <DateFieldComponent
                    selectedDate={editedDataNascimento}
                    onDateChange={setEditedDataNascimento}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "CPF",
            placeholder: "Digite o CPF da pessoa",
            value: editedCpf,
            initialValue: pessoa.cpf,
            onChange: (e) => setEditedCpf(e.target.value),
        },
        {
            label: "RG",
            placeholder: "Digite o RG da pessoa",
            value: editedRg,
            initialValue: pessoa.rg,
            onChange: (e) => setEditedRg(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Digite o telefone da pessoa",
            value: editedTelefone,
            initialValue: pessoa.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Email",
            placeholder: "Digite o email da pessoa",
            value: editedEmail,
            initialValue: pessoa.email,
            onChange: (e) => setEditedEmail(e.target.value),
        },
        {
            label: "Categoria Pessoa",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione uma categoria..." }, 
                        ...categoriasPessoa,
                    ]}
                    initialValue={pessoa.categoria_pessoa}
                    value={editedCategoriaPessoa}
                    isEditing={isEditing}
                    onChange={(e) => setEditedCategoriaPessoa(e.target.value)}
                />
            ),
        },
        {
            label: "Profissão",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione uma profissão..." }, 
                        ...profissoes,
                    ]}
                    initialValue={pessoa.profissao}
                    value={editedProfissao}
                    isEditing={isEditing}
                    onChange={(e) => setEditedProfissao(e.target.value)}
                />
            ),
        },
        {
            label: "Estado Civil",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione um estado civil..." }, 
                        ...estadosCivis,
                    ]}
                    initialValue={pessoa.estado_civil}
                    value={editedEstadoCivil}
                    isEditing={isEditing}
                    onChange={(e) => setEditedEstadoCivil(e.target.value)}
                />
            ),
        },
        {
            label: "Gênero",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione um gênero..." }, 
                        ...generos,
                    ]}
                    initialValue={pessoa.genero}
                    value={editedGenero}
                    isEditing={isEditing}
                    onChange={(e) => setEditedGenero(e.target.value)}
                />
            ),
        },
        {
            label: "Igreja",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione uma igreja..." }, 
                        ...igrejas,
                    ]}
                    initialValue={pessoa.igreja}
                    value={editedIgreja}
                    isEditing={isEditing}
                    onChange={(e) => setEditedIgreja(e.target.value)}
                />
            ),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={editedCep}
                    onChange={(e) => setEditedCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    initialValue={pessoa.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Digite o logradouro da pessoa",
            value: editedLogradouro,
            initialValue: pessoa.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número da pessoa",
            value: editedNumero,
            initialValue: pessoa.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento da pessoa",
            value: editedComplemento,
            initialValue: pessoa.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro da pessoa",
            value: editedBairro,
            initialValue: pessoa.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade da pessoa",
            value: editedCidade,
            initialValue: pessoa.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado da pessoa",
            value: editedEstado,
            initialValue: pessoa.estado,
            onChange: (e) => setEditedEstado(e.target.value),
        },
        {
            label: "Ativo",
            component: (
                <CheckboxFieldComponent
                    value={editedAtivo}
                    onChange={setEditedAtivo}
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <>
            {loading || loadingUpdate ? (
                <Loader />
            ) : error || errorUpdate ? (
                <Message variant="danger">{error || errorUpdate}</Message>
            ) : (
                <DetailsComponent
                    title="Detalhes da Pessoa"
                    fields={fields}
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath="/pessoas"
                />
            )}
        </>
    );
}

export default PessoaDetailsPage;