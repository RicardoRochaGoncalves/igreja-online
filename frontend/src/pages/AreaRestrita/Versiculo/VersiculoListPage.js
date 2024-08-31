import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CrudListComponent from "../../../components/CrudListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listVersiculos, deleteVersiculo } from "../../../store/actions/versiculoActions";

function VersiculoListPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const versiculoList = useSelector((state) => state.versiculoList);
    const { loading, error, versiculos } = versiculoList;

    const versiculoDelete = useSelector((state) => state.versiculoDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = versiculoDelete;

    const versiculoCreate = useSelector((state) => state.versiculoCreate);
    const { success: successCreate } = versiculoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listVersiculos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este versículo?")) {
            dispatch(deleteVersiculo(id));
        }
    };

    return (
        <Container>
            <CrudListComponent
                title="Versículos"
                items={versiculos}
                onDelete={deleteHandler}
                loading={loading || loadingDelete}
                error={error || errorDelete}
                Loader={Loader}
                Message={Message}
                linkUpdate="versiculos"
            />
        </Container>
    );
}

export default VersiculoListPage;