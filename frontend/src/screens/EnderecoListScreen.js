import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listEnderecos, deleteEndereco } from "../actions/enderecoActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ListComponent from "../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EnderecoListScreen() {
    const dispatch = useDispatch();

    const enderecoList = useSelector((state) => state.enderecoList);
    const { loading, error, enderecos } = enderecoList;

    const enderecoDelete = useSelector((state) => state.enderecoDelete);
    const { success: successDelete } = enderecoDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listEnderecos());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta endereço?")) {
            dispatch(deleteEndereco(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Endereços"
                            items={enderecos}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                            linkUpdate="enderecos"
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default EnderecoListScreen;
