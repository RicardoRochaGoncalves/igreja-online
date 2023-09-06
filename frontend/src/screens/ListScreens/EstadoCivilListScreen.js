import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listEstadosCivis,
    deleteEstadoCivil,
} from "../../actions/estadoCivilActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EstadoCivilListScreen() {
    const dispatch = useDispatch();

    const estadoCivilList = useSelector((state) => state.estadoCivilList);
    const { loading, error, estadosCivis } = estadoCivilList;

    const estadoCivilDelete = useSelector((state) => state.estadoCivilDelete);
    const { success: successDelete } = estadoCivilDelete;

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            dispatch(listEstadosCivis());
        } else {
            navigate(`/login`);
        }
    }, [dispatch, navigate, successDelete, userInfo]);
    const deleteHandler = (id) => {
        if (
            window.confirm("Tem certeza que deseja deletar este estado Civil?")
        ) {
            dispatch(deleteEstadoCivil(id));
        }
    };
    return (
        <div>
            <div>
                {userInfo && (
                    <Container>
                        <ListComponent
                            title="Estados Civis"
                            items={estadosCivis}
                            onDelete={deleteHandler}
                            loading={loading}
                            error={error}
                            Loader={Loader}
                            Message={Message}
                            linkUpdate='estadoscivis'
                        />
                    </Container>
                )}
            </div>
        </div>
    );
}

export default EstadoCivilListScreen;
