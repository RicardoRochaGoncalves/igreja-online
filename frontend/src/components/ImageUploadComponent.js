import React, { useState, useEffect } from "react";
import { Form, Image } from "react-bootstrap";
import { uploadImage } from "../services/api/imageUploadService"; // Importe o serviço
import Loader from "./Loader";

function ImageUploadComponent({ value, onUploadComplete, category = "general", isEditing }) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(value);

    useEffect(() => {
        setPreview(value);
    }, [value]);


    const handleUploadFile = async (e) => {
        const file = e.target.files[0];

        setUploading(true);

        try {
            const imageUrl = await uploadImage(file, category);
            setPreview(imageUrl);
            onUploadComplete(imageUrl);
        } catch (error) {
            // Lide com o erro, se necessário
            console.error("Falha ao carregar a imagem:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <Form.Group controlId="imagem">
            {preview && <Image src={preview} thumbnail style={{ height: '350px', marginBottom: '10px'}} />}
            <Form.Control 
                type="file"
                label="Escolha uma imagem" 
                custom="true" 
                onChange={handleUploadFile}
                disabled={!isEditing}  // Desabilita o campo se não estiver editando
            />
            {uploading && <Loader />}
        </Form.Group>
    );
}

export default ImageUploadComponent;
