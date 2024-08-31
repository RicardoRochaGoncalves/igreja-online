import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getEventoAoVivoDetails, updateEventoAoVivo } from "../../../store/actions/eventoAoVivoActions";
import DateFieldComponent from "../../../components/DateFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent"; // Importando o componente de texto rico
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import ImageUploadComponent from "../../../components/ImageUploadComponent";


function EventoAoVivoDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const eventoAoVivoDetails = useSelector((state) => state.eventoAoVivoDetails);
    const { loading, error, eventoAoVivo } = eventoAoVivoDetails;

    const eventoAoVivoUpdate = useSelector((state) => state.eventoAoVivoUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = eventoAoVivoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitulo, setEditedTitulo] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");
    const [editedData, setEditedData] = useState("");
    const [editedLinkYoutube, setEditedLinkYoutube] = useState("");
    const [editedImagem, setEditedImagem] = useState("");
    const [editedAtivo, setEditedAtivo] = useState(false);

    useEffect(() => {
        dispatch(getEventoAoVivoDetails(id));
    }, [dispatch, id, successUpdate]);

    useEffect(() => {
        if (eventoAoVivo) {
            setEditedTitulo(eventoAoVivo.titulo);
            setEditedDescricao(eventoAoVivo.descricao);
            setEditedData(eventoAoVivo.data_evento);
            setEditedLinkYoutube(eventoAoVivo.link_youtube);
            setEditedImagem(eventoAoVivo.imagem);
            setEditedAtivo(eventoAoVivo.ativo);
        }
    }, [eventoAoVivo]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTitulo(eventoAoVivo.titulo);
        setEditedDescricao(eventoAoVivo.descricao);
        setEditedData(eventoAoVivo.data_evento)
        setEditedLinkYoutube(eventoAoVivo.link_youtube);
        setEditedImagem(eventoAoVivo.imagem);
        setEditedAtivo(eventoAoVivo.ativo);
    };

    const handleSaveClick = () => {
        dispatch(
            updateEventoAoVivo({
                id: id,
                titulo: editedTitulo,
                descricao: editedDescricao,
                data_evento: editedData,
                link_youtube: editedLinkYoutube,
                imagem: editedImagem,
                ativo: editedAtivo,
            })
        );
        setIsEditing(false);
    };

    const handleImageUpload = (imagePath) => {
        setEditedImagem(imagePath);
    };


    const fields = [
        {
            label: "Titulo",
            placeholder: "Digite o titulo do evento",
            value: editedTitulo,
            initialValue: eventoAoVivo.titulo,
            onChange: (e) => setEditedTitulo(e.target.value),
        },
        {
            label: "Descrição",
            component: (
                <RichTextEditorComponent
                    value={editedDescricao}
                    onChange={setEditedDescricao}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Data",
            component: (
                <DateFieldComponent
                    selectedDate={editedData}
                    onDateChange={setEditedData}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Link Youtube",
            placeholder: "Digite o link do youtube do evento",
            value: editedLinkYoutube,
            initialValue: eventoAoVivo.link_youtube,
            onChange: (e) => setEditedLinkYoutube(e.target.value),
        },
        {
            label: "Imagem",
            component: (
                <ImageUploadComponent
                    value={editedImagem}
                    onUploadComplete={handleImageUpload}
                    category="noticias" // Categoria específica para notícias
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
                    title="Evento ao Vivo"
                    fields={fields}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    isEditing={isEditing}
                    backPath={"/eventosaovivo"}
                />
            )}
        </>
    );
}

export default EventoAoVivoDetailsPage;