import React from "react";
import { Button, ListGroup, Col, Row } from "react-bootstrap";

function ListComponent({ title, items, onDelete, loading, error, Loader, Message }) {
    return (
        <div>
            <Row>
                <Col xs={6} md={4}>
                    <h2>{title}</h2>
                </Col>
                <Col className="text-end" xs={6} md={4}>
                    <Button variant="primary" size="lg">
                        Cadastrar
                    </Button>
                </Col>
            </Row>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger" >{error}</Message>
            ) : (
                <Row>
                    <Col md={8}>
                        <ListGroup as="ul">
                            {items.map((item) => (
                                <ListGroup.Item key={item.id} as="li" action>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {item.nome}
                                        <div>
                                            <Button
                                                variant="light"
                                                className="btn-sm"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className="btn-sm"
                                                onClick={() =>
                                                    onDelete(item.id)
                                                }
                                            >
                                                <i className="fas fa-trash"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default ListComponent;
