import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProfissoes, deleteProfissao } from "../../actions/profissaoActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

function ProfissaoListScreen() {
    const dispatch = useDispatch();

    const profissaoList = useSelector((state) => state.profissaoList);
    const { loading, error, profissoes } = profissaoList;

    const profissaoDelete = useSelector((state) => state.profissaoDelete);
    const { success: successDelete } = profissaoDelete;

    const profissaoCreate = useSelector((state) => state.profissaoCreate);
    const { success: successCreate } = profissaoCreate;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listProfissoes());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, successCreate, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta profissao?")) {
            dispatch(deleteProfissao(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Profissoes"
                            items={profissoes}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                            linkUpdate="profissoes"
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default ProfissaoListScreen;
