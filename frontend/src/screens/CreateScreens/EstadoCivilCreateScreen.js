import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEstadoCivil } from "../../actions/estadoCivilActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function EstadoCivilCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(true);
    const [editedNome, setEditedNome] = useState("");

    const handleSaveClick = () => {
        dispatch(
            createEstadoCivil({
                nome: editedNome,
            })
        );

        navigate("/estadoscivis");
    };

    const fields = [
        {
            label: "Estado Civil",
            placeholder: "Estado Civil",
            value: editedNome,
            onChange: (e) => setEditedNome(e.target.value),
        },

    ];

    return (
        <div>
            <DetailsComponent
                title="Nova estadoCivil"
                isEditing={isEditing}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
        </div>
    );
}

export default EstadoCivilCreateScreen;
