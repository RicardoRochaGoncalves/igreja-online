import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategorias, deleteCategoria } from "../actions/categoriaActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ListComponent from "../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CategoriaListScreen() {
    const dispatch = useDispatch();

    const categoriaList = useSelector((state) => state.categoriaList);
    const { loading, error, categorias } = categoriaList;

    const categoriaDelete = useSelector((state) => state.categoriaDelete);
    const { success: successDelete } = categoriaDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listCategorias());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta categoria?")) {
            dispatch(deleteCategoria(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Categorias"
                            items={categorias}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default CategoriaListScreen;
