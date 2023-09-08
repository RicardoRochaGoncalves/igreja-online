import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProfissao } from "../../actions/profissaoActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function ProfissaoCreateScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [editedNome, setEditedNome] = useState("");
  const [editedDescricao, setEditedDescricao] = useState("");

  const handleSaveClick = () => {
    dispatch(
      createProfissao({
        nome: editedNome,
        descricao: editedDescricao,
      })
    );
    
    navigate("/profissoes"); 
  };

  const fields = [
    {
      label: "Nome da profissao",
      placeholder: "Nome da profissao",
      value: editedNome,
      onChange: (e) => setEditedNome(e.target.value),
    },
    {
      label: "Descrição da profissao",
      placeholder: "Descrição da profissao",
      value: editedDescricao,
      onChange: (e) => setEditedDescricao(e.target.value),
    },
  ];

  return (
    <div>
      <DetailsComponent
        title="Nova profissao"
        isEditing={isEditing}
        handleSaveClick={handleSaveClick}
        fields={fields}
      />
    </div>
  );
}

export default ProfissaoCreateScreen;