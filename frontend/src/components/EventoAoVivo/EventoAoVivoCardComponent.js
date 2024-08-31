// src/components/EventosAoVivo/LiveEventCardComponent.js
import React from "react";
import { Card } from "react-bootstrap";

function EventoAoVivoCardComponent({ evento }) {
    return (
        <Card className="mb-4" style={{ minWidth: "18rem" }}>
            <Card.Img
                variant="top"
                src={evento.imagem}
                alt={evento.titulo}
                style={{ height: "180px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{evento.titulo}</Card.Title>
                <Card.Text>
                    {new Date(evento.data_evento).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}{" "}
                    às{" "}
                    {new Date(evento.data_evento).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventoAoVivoCardComponent;
