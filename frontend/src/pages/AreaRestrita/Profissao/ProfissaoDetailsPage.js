import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import DetailsComponent from "../../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import { getProfissaoDetails, updateProfissao } from "../../../store/actions/profissaoActions";

function ProfissaoDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const profissaoDetails = useSelector((state) => state.profissaoDetails);
    const { loading, error, profissao } = profissaoDetails;

    const profissaoUpdate = useSelector((state) => state.profissaoUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = profissaoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(getProfissaoDetails(id));
    }, [dispatch, id, successUpdate]);

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
            label: "Nome",
            placeholder: "Digite o nome da profissão",
            value: editedNome,
            initialValue: profissao.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Digite a descrição da profissão",
            value: editedDescricao,
            initialValue: profissao.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <div>
            <DetailsComponent
                title="Detalhes da Profissão"
                fields={fields}
                handleEditClick={handleEditClick}
                isEditing={isEditing}
                handleSaveClick={handleSaveClick}
                backPath="/profissoes"
            />
        </div>
    );
}

export default ProfissaoDetailsPage;