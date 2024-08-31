import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listCategoriasPessoa, deleteCategoriaPessoa } from "../../../store/actions/categoriaPessoaActions";

function CategoriaPessoaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoriaPessoaList = useSelector((state) => state.categoriaPessoaList);
    const { loading, error, categoriasPessoa } = categoriaPessoaList;

    const categoriaPessoaDelete = useSelector((state) => state.categoriaPessoaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = categoriaPessoaDelete;

    const categoriaPessoaCreate = useSelector((state) => state.categoriaPessoaCreate);
    const { success: successCreate } = categoriaPessoaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listCategoriasPessoa());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta categoria de pessoa?")) {
            dispatch(deleteCategoriaPessoa(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Categorias de Pessoas"
                items={categoriasPessoa}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="categoriaspessoas"
            />
        </Container>
    );
}

export default CategoriaPessoaListPage;
