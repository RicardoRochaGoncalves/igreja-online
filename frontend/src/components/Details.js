import React from "react";
import { Card } from "react-bootstrap";

function Details({ categoria }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Detalhes da Categoria</Card.Title>
        <Card.Text>
          <strong>ID:</strong> {categoria.id}
        </Card.Text>
        <Card.Text>
          <strong>Nome:</strong> {categoria.nome}
        </Card.Text>
        {/* Adicione mais campos de detalhes conforme necessário */}
      </Card.Body>
    </Card>
  );
}

export default Details;