import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {
    getCarrosselImagemDetails,
    updateCarrosselImagem,
} from "../../../store/actions/carrosselImagemActions";

import ImageUploadComponent from "../../../components/ImageUploadComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";

function CarrosselImagemDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const carrosselImagemDetails = useSelector(
        (state) => state.carrosselImagemDetails
    );
    const { loading, error, carrosselImagem } = carrosselImagemDetails;

    const carrosselImagemUpdate = useSelector(
        (state) => state.carrosselImagemUpdate
    );
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = carrosselImagemUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitulo, setEditedTitulo] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");
    const [editedImagem, setEditedImagem] = useState("");
    const [editedAtivo, setEditedAtivo] = useState(false);

    useEffect(() => {
        dispatch(getCarrosselImagemDetails(id));
    }, [dispatch, id, successUpdate]);

    useEffect(() => {
        if (carrosselImagem) {
            setEditedTitulo(carrosselImagem.titulo);
            setEditedDescricao(carrosselImagem.descricao);
            setEditedImagem(carrosselImagem.imagem);
            setEditedAtivo(carrosselImagem.ativo);
        }
    }, [carrosselImagem]);
    

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTitulo(carrosselImagem.titulo);
        setEditedImagem(carrosselImagem.imagem);
        setEditedDescricao(carrosselImagem.descricao);
        setEditedAtivo(carrosselImagem.ativo);
    };

    const handleSaveClick = () => {
        dispatch(
            updateCarrosselImagem({
                id: id,
                titulo: editedTitulo,
                imagem: editedImagem,
                descricao: editedDescricao,
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
            label: "Título",
            placeholder: "Digite o título do carrossel de imagem",
            value: editedTitulo,
            initialValue: carrosselImagem.titulo,
            onChange: (e) => setEditedTitulo(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do carrossel de imagem",
            value: editedDescricao,
            initialValue: carrosselImagem.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
        {
            label: "Imagem",
            component: (
                <ImageUploadComponent
                    value={editedImagem}
                    onUploadComplete={handleImageUpload}
                    category="carrossel_imagens"
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
        <div>
            {loading || loadingUpdate ? (
                <Loader />
            ) : error || errorUpdate ? (
                <Message variant="danger">{error || errorUpdate}</Message>
            ) : (
                <DetailsComponent
                    title="Carrossel de Imagem"
                    fields={fields}
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath={"/carrosselimagens"}
                />
            )}
        </div>
    );
}

export default CarrosselImagemDetailsPage;
