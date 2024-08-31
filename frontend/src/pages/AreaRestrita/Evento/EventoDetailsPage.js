import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getEventoDetails, updateEvento } from "../../../store/actions/eventoActions";
import { fetchCep } from "../../../store/actions/cepActions";
import CepField from "../../../components/CepField";
import ImageUploadComponent from "../../../components/ImageUploadComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";



function EventoDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const eventoDetails = useSelector((state) => state.eventoDetails);
    const { loading, error, evento } = eventoDetails;

    const eventoUpdate = useSelector((state) => state.eventoUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = eventoUpdate;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitulo, setEditedTitulo] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");
    const [editedData, setEditedData] = useState("");
    const [editedDataPostagem, setEditedDataPostagem] = useState("");
    const [editedImagem, setEditedImagem] = useState("");
    const [editedCep, setEditedCep] = useState("");
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");
    const [editedAtivo, setEditedAtivo] = useState("");

    useEffect(() => {
        dispatch(getEventoDetails(id));
        if(cepFetched) {
            setEditedLogradouro(cepFetched.logradouro);
            setEditedBairro(cepFetched.bairro);
            setEditedCidade(cepFetched.localidade);
            setEditedEstado(cepFetched.uf);
        }
    }, [dispatch, id, successUpdate, cepFetched]);

    useEffect(() => {
        if (evento) {
            setEditedTitulo(evento.titulo);
            setEditedDescricao(evento.descricao);
            setEditedData(evento.data_evento);
            setEditedDataPostagem(evento.data_postagem);
            setEditedImagem(evento.imagem);
            setEditedCep(evento.cep);
            setEditedLogradouro(evento.logradouro);
            setEditedNumero(evento.numero);
            setEditedComplemento(evento.complemento);
            setEditedBairro(evento.bairro);
            setEditedCidade(evento.cidade);
            setEditedEstado(evento.estado);
            setEditedAtivo(evento.ativo);
        } 
    }, [dispatch, evento]);




    const handleEditClick = () => {
        setIsEditing(true);
        setEditedTitulo(evento.titulo);
        setEditedDescricao(evento.descricao);
        setEditedData(evento.data_evento)
        setEditedDataPostagem(evento.data_postagem)
        setEditedImagem(evento.imagem)
        setEditedCep(evento.cep)
        setEditedLogradouro(evento.logradouro)
        setEditedNumero(evento.numero)
        setEditedComplemento(evento.complemento)
        setEditedBairro(evento.bairro)
        setEditedCidade(evento.cidade)
        setEditedEstado(evento.estado)
        setEditedAtivo(evento.ativo)
    };

    const handleSaveClick = () => {
        dispatch(
            updateEvento({
                id: id,
                titulo: editedTitulo,
                descricao: editedDescricao,
                data_evento: editedData,
                data_postagem: editedDataPostagem,
                imagem: editedImagem,
                cep: editedCep,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
                ativo: editedAtivo
            })
        );
        setIsEditing(false);
    }

    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCep));
    };

    const handleImageUpload = (imagePath) => {
        setEditedImagem(imagePath);
    };

    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título do evento",
            value: editedTitulo,
            initialValue: evento.titulo,
            onChange: (e) => setEditedTitulo(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do evento",
            value: editedDescricao,
            initialValue: evento.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
        {
            label: "Data do evento",
            component: (
                <DateFieldComponent
                    selectedDate={editedData}
                    onDateChange={setEditedData}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Data Postagem",
            component: (
                <DateFieldComponent
                    selectedDate={editedDataPostagem}
                    onDateChange={setEditedDataPostagem}
                    isEditing={isEditing}
                />
            ),
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
            label: "CEP",
            component: (
                <CepField
                    value={editedCep}
                    onChange={(e) => setEditedCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    initialValue={evento.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Digite o logradouro do evento",
            value: editedLogradouro,
            initialValue: evento.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número do evento",
            value: editedNumero,
            initialValue: evento.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento do evento",
            value: editedComplemento,
            initialValue: evento.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro do evento",
            value: editedBairro,
            initialValue: evento.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade do evento",
            value: editedCidade,
            initialValue: evento.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado do evento",
            value: editedEstado,
            initialValue: evento.estado,
            onChange: (e) => setEditedEstado(e.target.value),
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
                    title="Detalhes do Evento"
                    fields={fields}
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    backPath="/eventos"
                />
            )}
        </>
    );
}

export default EventoDetailsPage;