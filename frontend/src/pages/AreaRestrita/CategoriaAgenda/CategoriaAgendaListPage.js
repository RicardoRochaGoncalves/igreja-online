import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listCategoriasAgenda, deleteCategoriaAgenda } from "../../../store/actions/categoriaAgendaActions";

function CategoriaAgendaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoriaAgendaList = useSelector((state) => state.categoriaAgendaList);
    const { loading, error, categoriasAgenda } = categoriaAgendaList;

    const categoriaAgendaDelete = useSelector((state) => state.categoriaAgendaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoriaAgendaDelete;

    const categoriaAgendaCreate = useSelector((state) => state.categoriaAgendaCreate);
    const { success: successCreate } = categoriaAgendaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listCategoriasAgenda());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta categoria de agenda?")) {
            dispatch(deleteCategoriaAgenda(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Categorias de Agenda"
                items={categoriasAgenda}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="categoriasagendas"
            />
        </Container>
    );
}

export default CategoriaAgendaListPage;