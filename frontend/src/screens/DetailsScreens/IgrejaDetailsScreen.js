import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listIgrejaDetails, updateIgreja } from "../../actions/igrejaActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

function IgrejaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const igrejaDetailsState = useSelector((state) => state.igrejaDetails);
    const { loading, error, igreja } = igrejaDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNomeFantasia, setEditedNomeFantasia] = useState("");
    const [editedRazaoSocial, setEditedRazaoSocial] = useState("");
    const [editedCnpj, setEditedCnpj] = useState("");
    const [editedDataCadastro, setEditedDataCadastro] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedEndereco, setEditedEndereco] = useState("");

    useEffect(() => {
        dispatch(listIgrejaDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNomeFantasia(igreja.nomeFantasia);
        setEditedRazaoSocial(igreja.razaoSocial);
        setEditedCnpj(igreja.CNPJ);
        setEditedDataCadastro(igreja.dataCadastro);
        setEditedTelefone(igreja.telefone);
        setEditedEndereco(igreja.endereco);
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
            onChange: (e) => setEditedDataCadastro(e.target.value),
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
            placeholder: "Endereço",
            value: editedEndereco,
            initialValue: igreja.endereco,
            onChange: (e) => setEditedEndereco(e.target.value),
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
                    title="igreja"
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
