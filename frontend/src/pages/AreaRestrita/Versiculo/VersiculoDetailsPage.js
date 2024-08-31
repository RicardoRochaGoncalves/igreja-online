import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getVersiculoDetails, updateVersiculo } from "../../../store/actions/versiculoActions";

import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent"; // Importando o componente de texto rico


function VersiculoDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const versiculoDetails = useSelector((state) => state.versiculoDetails);
    const { loading, error, versiculo } = versiculoDetails;

    const versiculoUpdate = useSelector((state) => state.versiculoUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = versiculoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedTexto, setEditedTexto] = useState("");
    const [editedLivro, setEditedLivro] = useState("");
    const [editedCapitulo, setEditedCapitulo] = useState("");
    const [editedVersiculo, setEditedVersiculo] = useState("");
    const [editedMensagem, setEditedMensagem] = useState("");
    const [editedAtivo, setEditedAtivo] = useState(false);

    useEffect(() => {
        dispatch(getVersiculoDetails(id));
    }, [dispatch, id, successUpdate]);

    useEffect(() => {
        if (versiculo) {
            setEditedTexto(versiculo.texto);
            setEditedLivro(versiculo.livro);
            setEditedCapitulo(versiculo.capitulo);
            setEditedVersiculo(versiculo.versiculo);
            setEditedMensagem(versiculo.mensagem);
            setEditedAtivo(versiculo.ativo);
        }
    }, [versiculo]);


    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTexto(versiculo.texto);
        setEditedLivro(versiculo.livro);
        setEditedCapitulo(versiculo.capitulo);
        setEditedVersiculo(versiculo.versiculo);
        setEditedMensagem(versiculo.mensagem);
        setEditedAtivo(versiculo.ativo);
    };

    const handleSaveClick = () => {
        dispatch(
            updateVersiculo({
                id: id,
                texto: editedTexto,
                livro: editedLivro,
                capitulo: editedCapitulo,
                versiculo: editedVersiculo,
                mensagem: editedMensagem,
                ativo: editedAtivo,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Texto",
            placeholder: "Digite o texto do versículo",
            value: editedTexto,
            initialValue: versiculo.texto,
            onChange: (e) => setEditedTexto(e.target.value),
        },
        {
            label: "Livro",
            placeholder: "Digite o livro do versículo",
            value: editedLivro,
            initialValue: versiculo.livro,
            onChange: (e) => setEditedLivro(e.target.value),
        },
        {
            label: "Capítulo",
            placeholder: "Digite o capítulo do versículo",
            value: editedCapitulo,
            initialValue: versiculo.capitulo,
            onChange: (e) => setEditedCapitulo(e.target.value),
        },
        {
            label: "Versículo",
            placeholder: "Digite o versículo",
            value: editedVersiculo,
            initialValue: versiculo.versiculo,
            onChange: (e) => setEditedVersiculo(e.target.value),
        },
        {
            label: "Mensagem",
            component: (
                <RichTextEditorComponent
                    value={editedMensagem}
                    onChange={setEditedMensagem}
                    isEditing={isEditing}
                />
            ),
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
                    title="Versículo"
                    fields={fields}
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath={"/versiculos"}
                />
            )}
        </>
    );
}

export default VersiculoDetailsPage;