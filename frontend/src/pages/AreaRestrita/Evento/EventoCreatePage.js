import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailsComponent from "../../../components/DetailsComponent";

import { createEvento } from "../../../store/actions/eventoActions";

import { fetchCep } from "../../../store/actions/cepActions";

import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";
import CepField from "../../../components/CepField";
import ImageUploadComponent from "../../../components/ImageUploadComponent";


function EventoCreatePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [dataPostagem, setDataPostagem] = useState("");
    const [imagem, setImagem] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [ativo, setAtivo] = useState(false);
    const [isEditing] = useState(true);


    const handleSaveClick = () => {
        dispatch(
            createEvento({
                titulo: titulo,
                descricao: descricao,
                data_evento: data,
                data_postagem: dataPostagem,
                imagem: imagem,
                cep: cep,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                ativo: ativo,
            })
        );
        navigate("/eventos");
    };

    const handleImageUpload = (imagePath) => {
        setImagem(imagePath);
    };

    useEffect(() => {
        if (cepFetched) {
            setLogradouro(cepFetched.logradouro);
            setBairro(cepFetched.bairro);
            setCidade(cepFetched.localidade);
            setEstado(cepFetched.uf);
        }
    }, [cepFetched]);    

    const handleCepButtonClick = () => {
        dispatch(fetchCep(cep));
    };


    const fields = [
        {
            label: "Título",
            placeholder: "Digite o título do evento",
            value: titulo,
            onChange: (e) => setTitulo(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição do evento",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
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
            label: "CEP",
            component: (
                <CepField
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Digite o logradouro",
            value: logradouro,
            onChange: (e) => setLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Digite o número",
            value: numero,
            onChange: (e) => setNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Digite o complemento",
            value: complemento,
            onChange: (e) => setComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Digite o bairro",
            value: bairro,
            onChange: (e) => setBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Digite a cidade",
            value: cidade,
            onChange: (e) => setCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Digite o estado",
            value: estado,
            onChange: (e) => setEstado(e.target.value),
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
            title="Criar Evento"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
            backPath="/eventos"
        />
    );
}

export default EventoCreatePage;