import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createVersiculo } from "../../../store/actions/versiculoActions";

import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent";

function VersiculoCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [texto, setTexto] = useState("");
    const [livro, setLivro] = useState("");
    const [capitulo, setCapitulo] = useState("");
    const [versiculo, setVersiculo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(
            createVersiculo({
                texto: texto,
                livro: livro,
                capitulo: capitulo,
                versiculo: versiculo,
                mensagem: mensagem,
                ativo: ativo,
            })
        );
        navigate("/versiculos");
    };

    const fields = [
        {
            label: "Texto",
            placeholder: "Digite o texto do versículo",
            value: texto,
            onChange: (e) => setTexto(e.target.value),
        },
        {
            label: "Livro",
            placeholder: "Digite o livro do versículo",
            value: livro,
            onChange: (e) => setLivro(e.target.value),
        },
        {
            label: "Capítulo",
            placeholder: "Digite o capítulo do versículo",
            value: capitulo,
            onChange: (e) => setCapitulo(e.target.value),
        },
        {
            label: "Versículo",
            placeholder: "Digite o versículo",
            value: versiculo,
            onChange: (e) => setVersiculo(e.target.value),
        },
        {
            label: "Mensagem",
            component: (
                <RichTextEditorComponent
                    value={mensagem}
                    onChange={setMensagem}
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
            title="Criar Versículo"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/versiculos"}
        />
    );
}

export default VersiculoCreatePage;
