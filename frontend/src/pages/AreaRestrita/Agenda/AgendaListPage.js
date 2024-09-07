import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listAgendas, deleteAgenda } from "../../../store/actions/agendaActions";

function AgendaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const agendaList = useSelector((state) => state.agendaList);
    const { loading, error, agendas } = agendaList;

    const agendaDelete = useSelector((state) => state.agendaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = agendaDelete;

    const agendaCreate = useSelector((state) => state.agendaCreate);
    const { success: successCreate } = agendaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listAgendas());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta agenda?")) {
            dispatch(deleteAgenda(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Agendas"
                items={agendas}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="agendas"
            />
        </Container>
    );
}

export default AgendaListPage;