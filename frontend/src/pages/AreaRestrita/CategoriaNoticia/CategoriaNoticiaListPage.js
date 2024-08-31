import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listCategoriasNoticia, deleteCategoriaNoticia } from "../../../store/actions/categoriaNoticiaActions";

function CategoriaNoticiaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoriaNoticiaList = useSelector((state) => state.categoriaNoticiaList);
    const { loading, error, categoriasNoticia } = categoriaNoticiaList;

    const categoriaNoticiaDelete = useSelector((state) => state.categoriaNoticiaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoriaNoticiaDelete;

    const categoriaNoticiaCreate = useSelector((state) => state.categoriaNoticiaCreate);
    const { success: successCreate } = categoriaNoticiaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listCategoriasNoticia());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta categoria de notícia?")) {
            dispatch(deleteCategoriaNoticia(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Categorias de Notícias"
                items={categoriasNoticia}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="categoriasnoticias"
            />
        </Container>
    );
}

export default CategoriaNoticiaListPage;