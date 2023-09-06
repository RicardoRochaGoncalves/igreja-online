import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProfissaoDetails, updateProfissao } from "../../actions/profissaoActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

function ProfissaoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const profissaoDetailsState = useSelector(
        (state) => state.profissaoDetails
    );
    const { loading, error, profissao } = profissaoDetailsState;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listProfissaoDetails(id));
    }, [dispatch, id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(profissao.nome);
        setEditedDescricao(profissao.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateProfissao({
                id: id,
                nome: editedNome,
                descricao: editedDescricao,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome da profissao",
            placeholder: "Nome da profissao",
            value: editedNome,
            initialValue: profissao.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição da profissao",
            placeholder: "Descrição da profissao",
            value: editedDescricao,
            initialValue: profissao.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <DetailsComponent
                    title="Profissão"
                    isEditing={isEditing}
                    handleEditClick={handleEditClick}
                    handleSaveClick={handleSaveClick}
                    fields={fields}
                />
            )}
        </div>
    );
}

export default ProfissaoDetailsScreen;
