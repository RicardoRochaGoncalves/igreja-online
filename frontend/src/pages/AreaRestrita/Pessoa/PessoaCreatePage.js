import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createPessoa } from "../../../store/actions/pessoaActions";

import { listEstadosCivis } from "../../../store/actions/estadoCivilActions";
import { listGeneros } from "../../../store/actions/generoActions";
import { listProfissoes } from "../../../store/actions/profissaoActions";
import { listCategoriasPessoa } from "../../../store/actions/categoriaPessoaActions";
import { listIgrejas } from "../../../store/actions/igrejaActions";

import { fetchCep, resetCep } from "../../../store/actions/cepActions";

import DateFieldComponent from "../../../components/DateFieldComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import SelectFieldComponent from "../../../components/SelectFieldComponent";
import CepField from "../../../components/CepField";

function PessoaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const estadoCivilList = useSelector((state) => state.estadoCivilList);
    const { estadosCivis } = estadoCivilList;

    const generoList = useSelector((state) => state.generoList);
    const { generos } = generoList;

    const profissaoList = useSelector((state) => state.profissaoList);
    const { profissoes } = profissaoList;

    const categoriaPessoaList = useSelector(
        (state) => state.categoriaPessoaList
    );
    const { categoriasPessoa } = categoriaPessoaList;

    const igrejaList = useSelector((state) => state.igrejaList);
    const { igrejas } = igrejaList;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [categoria, setCategoria] = useState("");
    const [profissao, setProfissao] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [genero, setGenero] = useState("");
    const [igreja, setIgreja] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [cep, setCep] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);

    useEffect(() => {
        dispatch(listEstadosCivis());
        dispatch(listGeneros());
        dispatch(listProfissoes());
        dispatch(listCategoriasPessoa());
        dispatch(listIgrejas());

        if (cepFetched) {
            setLogradouro(cepFetched.logradouro);
            setBairro(cepFetched.bairro);
            setCidade(cepFetched.localidade);
            setEstado(cepFetched.uf);
        }
    }, [dispatch, cepFetched]);

    const handleSaveClick = () => {
        dispatch(
            createPessoa({
                nome: nome,
                sobrenome: sobrenome,
                data_nascimento: dataNascimento,
                cpf: cpf,
                rg: rg,
                telefone: telefone,
                email: email,
                categoria_pessoa: categoria,
                profissao: profissao,
                estado_civil: estadoCivil,
                genero: genero,
                igreja: igreja,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                cep: cep,
                ativo: ativo,
            })
        );
        dispatch(resetCep());
        navigate("/pessoas");
    };

    const handleCepButtonClick = () => {
        dispatch(fetchCep(cep));
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da pessoa",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Sobrenome",
            placeholder: "Digite o sobrenome da pessoa",
            value: sobrenome,
            onChange: (e) => setSobrenome(e.target.value),
        },
        {
            label: "Data de Nascimento",
            component: (
                <DateFieldComponent
                    selectedDate={dataNascimento}
                    onDateChange={setDataNascimento}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "CPF",
            placeholder: "Digite o CPF da pessoa",
            value: cpf,
            onChange: (e) => setCpf(e.target.value),
        },
        {
            label: "RG",
            placeholder: "Digite o RG da pessoa",
            value: rg,
            onChange: (e) => setRg(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Digite o telefone da pessoa",
            value: telefone,
            onChange: (e) => setTelefone(e.target.value),
        },
        {
            label: "E-mail",
            placeholder: "Digite o e-mail da pessoa",
            value: email,
            onChange: (e) => setEmail(e.target.value),
        },
        {
            label: "Categoria",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma categoria..." },
                        ...categoriasPessoa,
                    ]}
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Profissão",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma profissão..." },
                        ...profissoes,
                    ]}
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Estado Civil",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um estado civil..." },
                        ...estadosCivis,
                    ]}
                    value={estadoCivil}
                    onChange={(e) => setEstadoCivil(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Gênero",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um gênero..." },
                        ...generos,
                    ]}
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Igreja",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma igreja..." },
                        ...igrejas,
                    ]}
                    value={igreja}
                    onChange={(e) => setIgreja(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Digite o logradouro da pessoa",
            value: logradouro,
            onChange: (e) => setLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número da pessoa",
            value: numero,
            onChange: (e) => setNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento da pessoa",
            value: complemento,
            onChange: (e) => setComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro da pessoa",
            value: bairro,
            onChange: (e) => setBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade da pessoa",
            value: cidade,
            onChange: (e) => setCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado da pessoa",
            value: estado,
            onChange: (e) => setEstado(e.target.value),
        },
        {
            label: "Ativo",
            component: (
                <CheckboxFieldComponent
                    value={ativo}
                    onChange={setAtivo}
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Pessoa"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/pessoas"}
        />
    );
}

export default PessoaCreatePage;
