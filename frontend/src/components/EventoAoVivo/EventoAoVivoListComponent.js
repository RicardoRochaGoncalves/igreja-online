// src/components/EventosAoVivo/LiveEventsListComponent.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventoAoVivoCardComponent from './EventoAoVivoCardComponent';

function EventoAoVivoListComponent({ eventos }) {
    // Ordena os eventos ao vivo da data mais próxima para a mais distante
    const eventosOrdenados = eventos.sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento));

    return (
        <Row>
            {eventosOrdenados.map((evento) => (
                <Col key={evento.id} sm={12} md={4} lg={4} xl={4}>  {/* Ajustando para 3 cards por linha */}
                    <EventoAoVivoCardComponent evento={evento} />
                </Col>
            ))}
        </Row>
    );
}

export default EventoAoVivoListComponent;
