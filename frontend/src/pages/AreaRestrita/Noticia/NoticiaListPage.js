import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listNoticias, deleteNoticia } from "../../../store/actions/noticiaActions";

function NoticiaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const noticiaList = useSelector((state) => state.noticiaList);
    const { loading, error, noticias } = noticiaList;

    const noticiaDelete = useSelector((state) => state.noticiaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = noticiaDelete;

    const noticiaCreate = useSelector((state) => state.noticiaCreate);
    const { success: successCreate } = noticiaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listNoticias());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta notícia?")) {
            dispatch(deleteNoticia(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Notícias"
                items={noticias}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="noticias"
            />
        </Container>
    );
}

export default NoticiaListPage;

