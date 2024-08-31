import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createNoticia } from "../../../store/actions/noticiaActions";

import { listCategoriasNoticia } from "../../../store/actions/categoriaNoticiaActions";

import DateFieldComponent from "../../../components/DateFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import SelectFieldComponent from "../../../components/SelectFieldComponent";
import ImageUploadComponent from "../../../components/ImageUploadComponent";

function NoticiaCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriaNoticiaList = useSelector((state) => state.categoriaNoticiaList);
    const { categoriasNoticia } = categoriaNoticiaList;

    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const [dataPostagem, setDataPostagem] = useState("");
    const [categoria, setCategoria] = useState("");
    const [materialExterno, setMaterialExterno] = useState("");
    const [imagem, setImagem] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);

    useEffect(() => {
        dispatch(listCategoriasNoticia());
    }, [dispatch]);


    const handleSaveClick = () => {
        dispatch(
            createNoticia({
                titulo: titulo,
                texto: texto,
                data_postagem: dataPostagem,
                categoria: categoria,
                material_externo: materialExterno,
                imagem: imagem,
                ativo: ativo,
            })
        );
        navigate("/noticias");
    };

    const handleImageUpload = (imagePath) => {
        setImagem(imagePath);
    };

    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título da notícia",
            value: titulo,
            onChange: (e) => setTitulo(e.target.value),
        },
        {
            label: "Texto",
            component: (
                <RichTextEditorComponent
                    value={texto}
                    onChange={setTexto}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Data de Postagem",
            component: (
                <DateFieldComponent
                    selectedDate={dataPostagem}
                    onDateChange={setDataPostagem}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Categoria",
            component: (
                <SelectFieldComponent
                    options={[{ id: "", nome: "Selecione uma categoria..." }, 
                        ...categoriasNoticia,
                    ]}
                    value={categoria}
                    isEditing={isEditing}
                    onChange={(e) => setCategoria(e.target.value)}
                />
            ),
        },
        {
            label: "Material Externo",
            placeholder: "Digite o link de material externo",
            value: materialExterno,
            onChange: (e) => setMaterialExterno(e.target.value),
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
            title="Criar Notícia"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/noticias"}
        />
    );
}

export default NoticiaCreatePage;
