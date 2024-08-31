import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listGeneros, deleteGenero } from "../../../store/actions/generoActions";

function GeneroListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const generoList = useSelector((state) => state.generoList);
    const { loading, error, generos } = generoList;

    const generoDelete = useSelector((state) => state.generoDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = generoDelete;

    const generoCreate = useSelector((state) => state.generoCreate);
    const { success: successCreate } = generoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listGeneros());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este gênero?")) {
            dispatch(deleteGenero(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Gêneros"
                items={generos}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="generos"
            />
        </Container>
    );
}

export default GeneroListPage;