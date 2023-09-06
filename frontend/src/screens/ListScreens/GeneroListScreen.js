import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listGeneros, deleteGenero } from "../../actions/generoActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GeneroListScreen() {
    const dispatch = useDispatch();

    const generoList = useSelector((state) => state.generoList);
    const { loading, error, generos } = generoList;

    const generoDelete = useSelector((state) => state.generoDelete);
    const { success: successDelete } = generoDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listGeneros());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este genero?")) {
            dispatch(deleteGenero(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Generos"
                            items={generos}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                            linkUpdate="generos"
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default GeneroListScreen;
