import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGenero } from "../../actions/generoActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function GeneroCreateScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [editedNome, setEditedNome] = useState("");

  const handleSaveClick = () => {
    dispatch(
      createGenero({
        nome: editedNome,
      })
    );
    
    navigate("/generos"); 
  };

  const fields = [
    {
      label: "Nome da genero",
      placeholder: "Nome da genero",
      value: editedNome,
      onChange: (e) => setEditedNome(e.target.value),
    },

  ];

  return (
    <div>
      <DetailsComponent
        title="Nova Genero"
        isEditing={isEditing}
        handleSaveClick={handleSaveClick}
        fields={fields}
      />
    </div>
  );
}

export default GeneroCreateScreen;