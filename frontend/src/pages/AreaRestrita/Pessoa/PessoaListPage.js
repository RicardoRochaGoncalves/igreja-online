import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listPessoas, deletePessoa } from "../../../store/actions/pessoaActions";

function PessoaListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const pessoaList = useSelector((state) => state.pessoaList);
    const { loading, error, pessoas } = pessoaList;

    const pessoaDelete = useSelector((state) => state.pessoaDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = pessoaDelete;

    const pessoaCreate = useSelector((state) => state.pessoaCreate);
    const { success: successCreate } = pessoaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listPessoas());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta pessoa?")) {
            dispatch(deletePessoa(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Pessoas"
                items={pessoas}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="pessoas"
            />
        </Container>
    );
}

export default PessoaListPage;

