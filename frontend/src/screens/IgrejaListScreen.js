import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listIgrejas, deleteIgreja } from "../actions/igrejaActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ListComponent from "../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function IgrejaListScreen() {
    const dispatch = useDispatch();

    const igrejaList = useSelector((state) => state.igrejaList);
    const { loading, error, igrejas } = igrejaList;

    const igrejaDelete = useSelector((state) => state.igrejaDelete);
    const { success: successDelete } = igrejaDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listIgrejas());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, userInfo]);
    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta igreja?")) {
            dispatch(deleteIgreja(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Igrejas"
                            items={igrejas}
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

export default IgrejaListScreen;
