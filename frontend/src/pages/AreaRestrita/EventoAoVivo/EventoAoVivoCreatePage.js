import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createEventoAoVivo } from "../../../store/actions/eventoAoVivoActions";

import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";
import ImageUploadComponent from "../../../components/ImageUploadComponent";


function EventoAoVivoCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [linkYoutube, setLinkYoutube] = useState("");
    const [imagem, setImagem] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(
            createEventoAoVivo({
                titulo: titulo,
                descricao: descricao,
                data_evento: data,
                link_youtube: linkYoutube,
                imagem: imagem,
                ativo: ativo,
            })
        );
        navigate("/eventosaovivo");
    };

    const handleImageUpload = (imagePath) => {
        setImagem(imagePath);
    };

    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título do evento ao vivo",
            value: titulo,
            onChange: (e) => setTitulo(e.target.value),
        },
        {
            label: "Descrição",
            component: (
                <RichTextEditorComponent
                    value={descricao}
                    onChange={setDescricao}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Data",
            component: (
                <DateFieldComponent
                    selectedDate={data}
                    onDateChange={setData}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Link Youtube",
            placeholder: "Digite o link do youtube",
            value: linkYoutube,
            onChange: (e) => setLinkYoutube(e.target.value),
        },
        {
            label: "Imagem",
            component: (
                <ImageUploadComponent
                    value={imagem}
                    onUploadComplete={handleImageUpload}
                    category="noticias"
                    isEditing={isEditing}
                />
            ),
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
            title="Criar Evento Ao Vivo"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath="/eventosaovivo"
        />
    );
}

export default EventoAoVivoCreatePage;
