import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listEventosAoVivo, deleteEventoAoVivo } from "../../../store/actions/eventoAoVivoActions";

function EventoAoVivoListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventoAoVivoList = useSelector((state) => state.eventoAoVivoList);
    const { loading, error, eventosAoVivo } = eventoAoVivoList;

    const eventoAoVivoDelete = useSelector((state) => state.eventoAoVivoDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = eventoAoVivoDelete;

    const eventoAoVivoCreate = useSelector((state) => state.eventoAoVivoCreate);
    const { success: successCreate } = eventoAoVivoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listEventosAoVivo());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este evento ao vivo?")) {
            dispatch(deleteEventoAoVivo(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Eventos ao Vivo"
                items={eventosAoVivo}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="eventosaovivo"
            />
        </Container>
    );
}

export default EventoAoVivoListPage;