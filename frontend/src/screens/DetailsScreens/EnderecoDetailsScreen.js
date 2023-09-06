import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEnderecoDetails, updateEndereco } from "../../actions/enderecoActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

function EnderecoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const enderecoDetailsState = useSelector(
        (state) => state.enderecoDetails
    );
    const { loading, error, endereco } = enderecoDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");
    const [editedCep, setEditedCep] = useState("");
    const [editedPais, setEditedPais] = useState("");

    useEffect(() => {
        dispatch(listEnderecoDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedLogradouro(endereco.logradouro);
        setEditedNumero(endereco.numero);
        setEditedComplemento(endereco.complemento);
        setEditedBairro(endereco.bairro);
        setEditedCidade(endereco.cidade);
        setEditedEstado(endereco.estado);
        setEditedCep(endereco.cep);
        setEditedPais(endereco.pais);
    };

    const handleSaveClick = () => {
        dispatch(
            updateEndereco({
                id: id,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
                cep: editedCep,
                pais: editedPais,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Logradouro",
            placeholder: "Digite o nome da rua",
            value: editedLogradouro,
            initialValue: endereco.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Numero",
            placeholder: "Numero",
            value: editedNumero,
            initialValue: endereco.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Complemento",
            value: editedComplemento,
            initialValue: endereco.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Bairro",
            value: editedBairro,
            initialValue: endereco.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            
            label: "Cidade",
            placeholder: "Cidade",
            value: editedCidade,
            initialValue: endereco.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Estado",
            value: editedEstado,
            initialValue: endereco.estado,
            onChange: (e) => setEditedEstado(e.target.value),
        },
        {
            label: "CEP",
            placeholder: "CEP",
            value: editedCep,
            initialValue: endereco.cep,
            onChange: (e) => setEditedCep(e.target.value),
        },
        {
            label: "Pais",
            placeholder: "Pais",
            value: editedPais,
            initialValue: endereco.pais,
            onChange: (e) => setEditedPais(e.target.value),
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
                    title="Endereço"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default EnderecoDetailsScreen;
