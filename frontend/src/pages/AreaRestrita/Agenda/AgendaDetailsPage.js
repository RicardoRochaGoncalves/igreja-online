import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {
    getAgendaDetails,
    updateAgenda,
} from "../../../store/actions/agendaActions";
import { listCategoriasAgenda } from "../../../store/actions/categoriaAgendaActions";
import { listPessoas } from "../../../store/actions/pessoaActions";

import SelectFieldComponent from "../../../components/SelectFieldComponent";
import DateFieldComponent from "../../../components/DateFieldComponent";
import CheckboxFieldComponent from "../../../components/CheckboxFieldComponent";

function AgendaDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const agendaDetails = useSelector((state) => state.agendaDetails);
    const { loading, error, agenda } = agendaDetails;

    const agendaUpdate = useSelector((state) => state.agendaUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = agendaUpdate;

    const categoriasAgendaList = useSelector(
        (state) => state.categoriaAgendaList
    );
    const { categoriasAgenda } = categoriasAgendaList;

    const pessoasList = useSelector((state) => state.pessoaList);
    const { pessoas } = pessoasList;

    const [dataEvento, setDataEvento] = useState("");
    const [categoria, setCategoria] = useState("");
    const [dirigente, setDirigente] = useState("");
    const [pregador, setPregador] = useState("");
    const [ativo, setAtivo] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        dispatch(listCategoriasAgenda());
        dispatch(listPessoas());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAgendaDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleSaveClick = () => {
        dispatch(
            updateAgenda({
                id: id,
                data_evento: dataEvento,
                categoria: categoria,
                dirigente: dirigente,
                pregador: pregador,
                ativo: ativo,
            })
        );
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setDataEvento(agenda.data_evento);
        setCategoria(agenda.categoria);
        setDirigente(agenda.dirigente);
        setPregador(agenda.pregador);
        setAtivo(agenda.ativo);
    };

    const fields = [
        {
            label: "Data do Evento",
            component: (
                <DateFieldComponent
                    value={dataEvento}
                    isEditing={isEditing}
                    onChange={(e) => setDataEvento(e.target.value)}
                />
            ),
        },
        {
            label: "Categoria",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma categoria..." },
                        ...categoriasAgenda,
                    ]}
                    value={categoria}
                    isEditing={isEditing}
                    onChange={(e) => setCategoria(e.target.value)}
                />
            ),
        },
        {
            label: "Dirigente",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um dirigente..." },
                        ...pessoas,
                    ]}
                    value={dirigente}
                    isEditing={isEditing}
                    onChange={(e) => setDirigente(e.target.value)}
                />
            ),
        },
        {
            label: "Pregador",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um pregador..." },
                        ...pessoas,
                    ]}
                    value={pregador}
                    isEditing={isEditing}
                    onChange={(e) => setPregador(e.target.value)}
                />
            ),
        },
        {
            label: "Ativo",
            component: (
                <CheckboxFieldComponent
                    checked={ativo}
                    onChange={(e) => setAtivo(e.target.checked)}
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
                    title="Agenda"
                    fields={fields}
                    handleSaveClick={handleSaveClick}
                    handleEditClick={handleEditClick}
                    isEditing={isEditing}
                    backPath={"/agenda"}
                />
            )}
        </>
    );
}

export default AgendaDetailsPage;
