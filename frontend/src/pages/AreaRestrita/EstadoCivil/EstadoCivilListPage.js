import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listEstadosCivis, deleteEstadoCivil } from "../../../store/actions/estadoCivilActions";

function EstadoCivilListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const estadoCivilList = useSelector((state) => state.estadoCivilList);
    const { loading, error, estadosCivis } = estadoCivilList;

    const estadoCivilDelete = useSelector((state) => state.estadoCivilDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = estadoCivilDelete;

    const estadoCivilCreate = useSelector((state) => state.estadoCivilCreate);
    const { success: successCreate } = estadoCivilCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listEstadosCivis());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este estado civil?")) {
            dispatch(deleteEstadoCivil(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Estados Civis"
                items={estadosCivis}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="estadoscivis"
            />
        </Container>
    );
}

export default EstadoCivilListPage;