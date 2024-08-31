import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listIgrejas, deleteIgreja } from "../../../store/actions/igrejaActions";

function IgrejaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const igrejaList = useSelector((state) => state.igrejaList);
    const { loading, error, igrejas } = igrejaList;

    const igrejaDelete = useSelector((state) => state.igrejaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = igrejaDelete;

    const igrejaCreate = useSelector((state) => state.igrejaCreate);
    const { success: successCreate } = igrejaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listIgrejas());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta igreja?")) {
            dispatch(deleteIgreja(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Igrejas"
                items={igrejas}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="igrejas"
            />
        </Container>
    );
}

export default IgrejaListPage;