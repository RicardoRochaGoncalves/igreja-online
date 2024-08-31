import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createIgreja } from "../../../store/actions/igrejaActions";

import { fetchCep, resetCep } from "../../../store/actions/cepActions";
import CepField from "../../../components/CepField";

function IgrejaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [nome, setNome] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [isEditing] = useState(true);

    useEffect(() => {
        if (cepFetched) {
            setLogradouro(cepFetched.logradouro);
            setBairro(cepFetched.bairro);
            setCidade(cepFetched.localidade);
            setEstado(cepFetched.uf);
        }
    }
    , [cepFetched]);

    const handleSaveClick = () => {
        dispatch(
            createIgreja({
                nome: nome,
                razao_social: razaoSocial,
                cnpj: cnpj,
                telefone: telefone,
                email: email,
                cep: cep,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            })
        );
        dispatch(resetCep());
        navigate("/igrejas");
    }


    const handleCepButtonClick = () => {
        dispatch(fetchCep(cep));
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Digite o nome da igreja",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Razão Social",
            placeholder: "Digite a razão social da igreja",
            value: razaoSocial,
            onChange: (e) => setRazaoSocial(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "Digite o CNPJ da igreja",
            value: cnpj,
            onChange: (e) => setCnpj(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Digite o telefone da igreja",
            value: telefone,
            onChange: (e) => setTelefone(e.target.value),
        },
        {
            label: "E-mail",
            placeholder: "Digite o e-mail da igreja",
            value: email,
            onChange: (e) => setEmail(e.target.value),
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
            placeholder: "Digite o logradouro",
            value: logradouro,
            onChange: (e) => setLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número",
            value: numero,
            onChange: (e) => setNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento",
            value: complemento,
            onChange: (e) => setComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro",
            value: bairro,
            onChange: (e) => setBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade",
            value: cidade,
            onChange: (e) => setCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado",
            value: estado,
            onChange: (e) => setEstado(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Igreja"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath="/igrejas"
        />
    );
}

export default IgrejaCreatePage;
