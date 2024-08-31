import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getNoticiaDetails, updateNoticia } from "../../../store/actions/noticiaActions";

import { listCategoriasNoticia } from "../../../store/actions/categoriaNoticiaActions";

import SelectFieldComponent from "../../../components/SelectFieldComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import ImageUploadComponent from "../../../components/ImageUploadComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";
import RichTextEditorComponent from "../../../components/RichTextEditorComponent"; // Importando o componente de texto rico



function NoticiaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const noticiaDetails = useSelector((state) => state.noticiaDetails);
    const { loading, error, noticia } = noticiaDetails;

    const noticiaUpdate = useSelector((state) => state.noticiaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = noticiaUpdate;

    const categoriaNoticiaList = useSelector((state) => state.categoriaNoticiaList);
    const { categoriasNoticia } = categoriaNoticiaList;

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitulo, setEditedTitulo] = useState("");
    const [editedTexto, setEditedTexto] = useState("");
    const [editedDataPostagem, setEditedDataPostagem] = useState("");
    const [editedCategoria, setEditedCategoria] = useState("");
    const [editedMaterialExterno, setEditedMaterialExterno] = useState("");
    const [editedImagem, setEditedImagem] = useState("");
    const [editedAtivo, setEditedAtivo] = useState(false);

    useEffect(() => {
        dispatch(getNoticiaDetails(id));
        dispatch(listCategoriasNoticia());
    }, [dispatch, id, successUpdate]);

    useEffect(() => {
        if (noticia) {
            setEditedTitulo(noticia.titulo);
            setEditedTexto(noticia.texto);
            setEditedDataPostagem(noticia.data_postagem);
            setEditedCategoria(noticia.categoria);
            setEditedMaterialExterno(noticia.material_externo);
            setEditedImagem(noticia.imagem);
            setEditedAtivo(noticia.ativo);
        }
    }, [noticia]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTitulo(noticia.titulo);
        setEditedTexto(noticia.texto);
        setEditedDataPostagem(noticia.data_postagem);
        setEditedCategoria(noticia.categoria);
        setEditedMaterialExterno(noticia.material_externo);
        setEditedImagem(noticia.imagem);
        setEditedAtivo(noticia.ativo);
    };

    const handleSaveClick = () => {
        dispatch(
            updateNoticia({
                id: id,
                titulo: editedTitulo,
                texto: editedTexto,
                data_postagem: editedDataPostagem,
                categoria: editedCategoria,
                material_externo: editedMaterialExterno,
                imagem: editedImagem,
                ativo: editedAtivo,
            })
        );
        setIsEditing(false);
    }

    const handleImageUpload = (imagePath) => {
        setEditedImagem(imagePath);
    };

    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título da notícia",
            value: editedTitulo,
            initialValue: noticia.titulo,
            onChange: (e) => setEditedTitulo(e.target.value),
        },
        {
            label: "Texto",
            component: (
                <RichTextEditorComponent
                    value={editedTexto}
                    onChange={setEditedTexto}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Data",
            component: (
                <DateFieldComponent
                    selectedDate={editedDataPostagem}
                    onDateChange={setEditedDataPostagem}
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
                    initialValue={noticia.categoria}
                    value={editedCategoria}
                    isEditing={isEditing}
                    onChange={(e) => setEditedCategoria(e.target.value)}
                />
            ),
        },
        {
            label: "Material Externo",
            placeholder: "Digite o material externo da notícia",
            value: editedMaterialExterno,
            initialValue: noticia.material_externo,
            onChange: (e) => setEditedMaterialExterno(e.target.value),
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
                <Message variant="danger">{error}</Message>
            ) : (
                <DetailsComponent
                    title="Detalhes da Notícia"
                    isEditing={isEditing}
                    fields={fields}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath="/noticias"
                />
            )}
        </>
    );
}

export default NoticiaDetailsPage;
