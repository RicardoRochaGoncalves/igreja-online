import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listProfissoes, deleteProfissao } from "../../../store/actions/profissaoActions";

function ProfissaoListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const profissaoList = useSelector((state) => state.profissaoList);
    const { loading, error, profissoes } = profissaoList;

    const profissaoDelete = useSelector((state) => state.profissaoDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = profissaoDelete;

    const profissaoCreate = useSelector((state) => state.profissaoCreate);
    const { success: successCreate } = profissaoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listProfissoes());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta profissão?")) {
            dispatch(deleteProfissao(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Profissões"
                items={profissoes}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="profissoes"
            />
        </Container>
    );
}

export default ProfissaoListPage;

