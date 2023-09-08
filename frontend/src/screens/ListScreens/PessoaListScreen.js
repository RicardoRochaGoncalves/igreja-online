import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPessoas, deletePessoa } from "../../actions/pessoaActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container, ListGroup } from "react-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function PessoaListScreen() {
    const dispatch = useDispatch();

    const pessoaList = useSelector((state) => state.pessoaList);
    const { loading, error, pessoas } = pessoaList;

    const pessoaDelete = useSelector((state) => state.pessoaDelete);
    const { success: successDelete } = pessoaDelete;

    const pessoaCreate = useSelector((state) => state.pessoaCreate);
    const { success: successCreate } = pessoaCreate;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listPessoas());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, successCreate, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta pessoa?")) {
            dispatch(deletePessoa(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Pessoas"
                            items={pessoas}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                            linkUpdate="pessoas"
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default PessoaListScreen;
