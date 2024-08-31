import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getIgrejaDetails, updateIgreja } from "../../../store/actions/igrejaActions";
import { fetchCep } from "../../../store/actions/cepActions";
import CepField from "../../../components/CepField";

function IgrejaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const igrejaDetails = useSelector((state) => state.igrejaDetails);
    const { loading, error, igreja } = igrejaDetails;

    const igrejaUpdate = useSelector((state) => state.igrejaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = igrejaUpdate;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;


    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedRazaoSocial, setEditedRazaoSocial] = useState("");
    const [editedCnpj, setEditedCnpj] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedCep, setEditedCep] = useState("");
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");

    useEffect(() => {
        dispatch(getIgrejaDetails(id));
        if(cepFetched) {
            setEditedLogradouro(cepFetched.logradouro);
            setEditedBairro(cepFetched.bairro);
            setEditedCidade(cepFetched.localidade);
            setEditedEstado(cepFetched.uf);
        }
    }, [dispatch, id, successUpdate, cepFetched]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(igreja.nome);
        setEditedRazaoSocial(igreja.razao_social);
        setEditedCnpj(igreja.cnpj);
        setEditedTelefone(igreja.telefone);
        setEditedEmail(igreja.email);
        setEditedCep(igreja.cep);
        setEditedLogradouro(igreja.logradouro);
        setEditedNumero(igreja.numero);
        setEditedComplemento(igreja.complemento);
        setEditedBairro(igreja.bairro);
        setEditedCidade(igreja.cidade);
        setEditedEstado(igreja.estado);
    };

    const handleSaveClick = () => {
        dispatch(
            updateIgreja({
                id: id,
                nome: editedNome,
                razao_social: editedRazaoSocial,
                cnpj: editedCnpj,
                telefone: editedTelefone,
                email: editedEmail,
                cep: editedCep,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
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
            placeholder: "Digite o nome da igreja",
            value: editedNome,
            initialValue: igreja.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Razão Social",
            placeholder: "Digite a razão social da igreja",
            value: editedRazaoSocial,
            initialValue: igreja.razao_social,
            onChange: (e) => setEditedRazaoSocial(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "Digite o CNPJ da igreja",
            value: editedCnpj,
            initialValue: igreja.cnpj,
            onChange: (e) => setEditedCnpj(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Digite o telefone da igreja",
            value: editedTelefone,
            initialValue: igreja.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "Email",
            placeholder: "Digite o email da igreja",
            value: editedEmail,
            initialValue: igreja.email,
            onChange: (e) => setEditedEmail(e.target.value),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={editedCep}
                    onChange={(e) => setEditedCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    initialValue={igreja.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Digite o logradouro da igreja",
            value: editedLogradouro,
            initialValue: igreja.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número da igreja",
            value: editedNumero,
            initialValue: igreja.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento da igreja",
            value: editedComplemento,
            initialValue: igreja.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro da igreja",
            value: editedBairro,
            initialValue: igreja.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade da igreja",
            value: editedCidade,
            initialValue: igreja.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado da igreja",
            value: editedEstado,
            initialValue: igreja.estado,
            onChange: (e) => setEditedEstado(e.target.value),
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
                    title="Detalhes da Igreja"
                    fields={fields}
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath="/igrejas"
                />
            )}
        </>
    );

}

export default IgrejaDetailsPage;
