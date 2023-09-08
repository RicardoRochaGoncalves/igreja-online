import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEndereco } from "../../actions/enderecoActions";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

function EnderecoCreateScreen({ history }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [editedLogradouro, setEditedLogradouro] = useState("");
  const [editedNumero, setEditedNumero] = useState("");
  const [editedComplemento, setEditedComplemento] = useState("");
  const [editedBairro, setEditedBairro] = useState("");
  const [editedCidade, setEditedCidade] = useState("");
  const [editedEstado, setEditedEstado] = useState("");
  const [editedCep, setEditedCep] = useState("");
  const [editedPais, setEditedPais] = useState("");

  const handleSaveClick = () => {
    dispatch(
      createEndereco({
        logradouro: editedLogradouro,
        numero: editedNumero,
        complemento: editedComplemento,
        bairro: editedBairro,
        cidade: editedCidade,
        estado: editedEstado,
        cep: editedCep,
        pais: editedPais,
      })
    );

    navigate("/enderecos");
  };

  const fields = [
    {
      label: "Logradouro",
      placeholder: "Digite o nome da rua",
      value: editedLogradouro,
      onChange: (e) => setEditedLogradouro(e.target.value),
    },
    {
      label: "Numero",
      placeholder: "Numero",
      value: editedNumero,
      onChange: (e) => setEditedNumero(e.target.value),
    },
    {
      label: "Complemento",
      placeholder: "Complemento",
      value: editedComplemento,
      onChange: (e) => setEditedComplemento(e.target.value),
    },
    {
      label: "Bairro",
      placeholder: "Bairro",
      value: editedBairro,
      onChange: (e) => setEditedBairro(e.target.value),
    },
    {
      label: "Cidade",
      placeholder: "Cidade",
      value: editedCidade,
      onChange: (e) => setEditedCidade(e.target.value),
    },
    {
      label: "Estado",
      placeholder: "Estado",
      value: editedEstado,
      onChange: (e) => setEditedEstado(e.target.value),
    },
    {
      label: "CEP",
      placeholder: "CEP",
      value: editedCep,
      onChange: (e) => setEditedCep(e.target.value),
    },
    {
      label: "Pais",
      placeholder: "Pais",
      value: editedPais,
      onChange: (e) => setEditedPais(e.target.value),
    },
  ];

  return (
    <div>
      <DetailsComponent
        title="Novo Endereco"
        isEditing={isEditing}
        handleSaveClick={handleSaveClick}
        fields={fields}
      />
    </div>
  );
}

export default EnderecoCreateScreen;
