import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listEventos, deleteEvento } from "../../../store/actions/eventoActions";

function EventoListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventoList = useSelector((state) => state.eventoList);
    const { loading, error, eventos } = eventoList;

    const eventoDelete = useSelector((state) => state.eventoDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = eventoDelete;

    const eventoCreate = useSelector((state) => state.eventoCreate);
    const { success: successCreate } = eventoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listEventos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este evento?")) {
            dispatch(deleteEvento(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Eventos"
                items={eventos}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="eventos"
            />
        </Container>
    );
}

export default EventoListPage;
