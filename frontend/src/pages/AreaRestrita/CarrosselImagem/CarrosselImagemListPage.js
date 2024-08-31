import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listCarrosselImagens, deleteCarrosselImagem } from "../../../store/actions/carrosselImagemActions";

function CarrosselImagemListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const carrosselImagemList = useSelector((state) => state.carrosselImagemList);
    const { loading, error, carrosselImagens } = carrosselImagemList;

    const carrosselImagemDelete = useSelector((state) => state.carrosselImagemDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = carrosselImagemDelete;

    const carrosselImagemCreate = useSelector((state) => state.carrosselImagemCreate);
    const { success: successCreate } = carrosselImagemCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listCarrosselImagens());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta imagem do carrossel?")) {
            dispatch(deleteCarrosselImagem(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Imagens do Carrossel"
                items={carrosselImagens}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="carrosselimagens"
            />
        </Container>
    );
}

export default CarrosselImagemListPage;
