import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategoria } from "../../actions/categoriaActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function CategoriaCreateScreen({ history }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [editedNome, setEditedNome] = useState("");
  const [editedDescricao, setEditedDescricao] = useState("");

  const handleSaveClick = () => {
    dispatch(
      createCategoria({
        nome: editedNome,
        descricao: editedDescricao,
      })
    );
    
    navigate("/categorias"); 
  };

  const fields = [
    {
      label: "Nome da Categoria",
      placeholder: "Nome da Categoria",
      value: editedNome,
      onChange: (e) => setEditedNome(e.target.value),
    },
    {
      label: "Descrição da Categoria",
      placeholder: "Descrição da Categoria",
      value: editedDescricao,
      onChange: (e) => setEditedDescricao(e.target.value),
    },
  ];

  return (
    <div>
      <DetailsComponent
        title="Nova Categoria"
        isEditing={isEditing}
        handleSaveClick={handleSaveClick}
        fields={fields}
      />
    </div>
  );
}

export default CategoriaCreateScreen;