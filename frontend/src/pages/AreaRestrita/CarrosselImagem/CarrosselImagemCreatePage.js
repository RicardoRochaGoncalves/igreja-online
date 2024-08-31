import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createCarrosselImagem } from "../../../store/actions/carrosselImagemActions";

import ImageUploadComponent from "../../../components/ImageUploadComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";

function CarrosselImagemCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(
            createCarrosselImagem({
                titulo: titulo,
                descricao: descricao,
                imagem: imagem,
                ativo: ativo,
            })
        );
        navigate("/carrosselimagens");
    };

    const handleImageUpload = (imagePath) => {
        setImagem(imagePath);
    };

    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título do carrossel",
            value: titulo,
            onChange: (e) => setTitulo(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do carrossel",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
        {
            label: "Imagem",
            component: (
                <ImageUploadComponent
                    value={imagem}
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
                    value={ativo}
                    onChange={setAtivo}
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <DetailsComponent
            title="Criar Carrossel de Imagem"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath={"/carrosselimagens"}
        />
    );

}

export default CarrosselImagemCreatePage;