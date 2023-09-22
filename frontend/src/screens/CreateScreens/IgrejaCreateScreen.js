import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIgreja } from "../../actions/igrejaActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "../../components/DatePickerComponent";
import { listEnderecos } from "../../actions/enderecoActions";
import SelectFieldComponent from "../../components/SelectFieldComponent";
import { fetchCep } from "../../actions/cepActions";
import CepField from "../../components/CepField";

function IgrejaCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const enderecoList = useSelector((state) => state.enderecoList);
    const { enderecos } = enderecoList;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(true);
    const [editedNomeFantasia, setEditedNomeFantasia] = useState("");
    const [editedRazaoSocial, setEditedRazaoSocial] = useState("");
    const [editedCnpj, setEditedCnpj] = useState("");
    const [editedDataCadastro, setEditedDataCadastro] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedEndereco, setEditedEndereco] = useState("");
    const [editedCEP, setEditedCEP] = useState("");
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");

    useEffect(() => {
        dispatch(listEnderecos());
        if (cepFetched) {
            setEditedLogradouro(cepFetched.logradouro || "");
            setEditedBairro(cepFetched.bairro || "");
            setEditedCidade(cepFetched.localidade || "");
            setEditedEstado(cepFetched.uf || "");
        }
    }, [dispatch, cepFetched]);

    const handleDateChange = (date) => {
        setEditedDataCadastro(date);
    };
    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCEP));
    };
    const handleSaveClick = () => {
        dispatch(
            createIgreja({
                nomeFantasia: editedNomeFantasia,
                razaoSocial: editedRazaoSocial,
                CNPJ: editedCnpj,
                dataCadastro: editedDataCadastro,
                telefone: editedTelefone,
                endereco: editedEndereco,
                cep: editedCEP,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
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
            component: (
                <DatePickerComponent
                    dataSelecionada={editedDataCadastro}
                    onChange={handleDateChange}
                />
            ),
        },
        {
            label: "Telefone",
            placeholder: "Telefone",
            value: editedTelefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Endereço",
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
            label: "CEP",
            component: (
                <CepField
                    value={editedCEP}
                    onChange={(e) => setEditedCEP(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Logradouro",
            value: editedLogradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Número",
            value: editedNumero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Complemento",
            value: editedComplemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Bairro",
            value: editedBairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Cidade",
            value: editedCidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Estado",
            value: editedEstado,
            onChange: (e) => setEditedEstado(e.target.value),
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
