import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listIgrejaDetails, updateIgreja } from "../../actions/igrejaActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";
import DatePickerComponent from "../../components/DatePickerComponent";
import { listEnderecos } from "../../actions/enderecoActions";
import SelectFieldComponent from "../../components/SelectFieldComponent";
import { fetchCep } from "../../actions/cepActions";
import CepField from "../../components/CepField";


function IgrejaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const igrejaDetailsState = useSelector((state) => state.igrejaDetails);
    const { loading, error, igreja } = igrejaDetailsState;

    const enderecoList = useSelector((state) => state.enderecoList);
    const { enderecos } = enderecoList;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(false);
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
        dispatch(listIgrejaDetails(id));
        dispatch(listEnderecos());
        if (igreja.dataCadastro) {
            setEditedDataCadastro(new Date(igreja.dataCadastro));
        }
        if (cepFetched) {
            setEditedLogradouro(cepFetched.logradouro || "");
            setEditedBairro(cepFetched.bairro || "");
            setEditedCidade(cepFetched.localidade || "");
            setEditedEstado(cepFetched.uf || "");
        }
    }, [dispatch, id, igreja.dataCadastro, cepFetched]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNomeFantasia(igreja.nomeFantasia);
        setEditedRazaoSocial(igreja.razaoSocial);
        setEditedCnpj(igreja.CNPJ);
        setEditedDataCadastro(new Date(igreja.dataCadastro));
        setEditedTelefone(igreja.telefone);
        setEditedEndereco(igreja.endereco);
        setEditedCEP(igreja.cep);
        setEditedLogradouro(igreja.logradouro);
        setEditedNumero(igreja.numero);
        setEditedComplemento(igreja.complemento);
        setEditedBairro(igreja.bairro);
        setEditedCidade(igreja.cidade);
        setEditedEstado(igreja.estado);
    };

    const handleDateChange = () => {

    };

    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCEP));
    };


    const handleSaveClick = () => {
        dispatch(
            updateIgreja({
                id: id,
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
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome Fantasia da igreja",
            placeholder: "Nome Fantasia da igreja",
            value: editedNomeFantasia,
            initialValue: igreja.nomeFantasia,
            onChange: (e) => setEditedNomeFantasia(e.target.value),
        },
        {
            label: "Razão Social",
            placeholder: "Razão Social",
            value: editedRazaoSocial,
            initialValue: igreja.razaoSocial,
            onChange: (e) => setEditedRazaoSocial(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "CNPJ",
            value: editedCnpj,
            initialValue: igreja.CNPJ,
            onChange: (e) => setEditedCnpj(e.target.value),
        },
        {
            label: "Data de Cadastro",
            placeholder: "Data de Cadastro",
            value: editedDataCadastro,
            initialValue: igreja.dataCadastro,
            component: (
                <DatePickerComponent
                    dataSelecionada={editedDataCadastro}
                    onChange={handleDateChange}
                />
            )
        },
        {
            label: "Telefone",
            placeholder: "Telefone",
            value: editedTelefone,
            initialValue: igreja.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Endereço",
            component: (
                <SelectFieldComponent
                    options={enderecos}
                    initialValue={igreja.endereco}
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
                    initialValue={igreja.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Logradouro",
            value: editedLogradouro,
            initialValue: igreja.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Número",
            value: editedNumero,
            initialValue: igreja.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Complemento",
            value: editedComplemento,
            initialValue: igreja.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Bairro",
            value: editedBairro,
            initialValue: igreja.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Cidade",
            value: editedCidade,
            initialValue: igreja.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Estado",
            value: editedEstado,
            initialValue: igreja.estado,
            onChange: (e) => setEditedEstado(e.target.value),
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
                    title="Igreja"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default IgrejaDetailsScreen;
