import React from "react";
import { Button, ListGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CrudListComponent({
    title,
    items,
    onDelete,
    loading,
    error,
    Loader,
    Message,
    linkUpdate,
}) {
    return (
        <div>
            <Row>
                <Col xs={6} md={4}>
                    <h2>{title}</h2>
                </Col>
                <Col className="text-end" xs={6} md={4}>
                    <Link to="/home">
                        <Button variant="outline-primary" size="lg" className="me-2">
                            Voltar
                        </Button>
                    </Link>
                    <Link to={`/${linkUpdate}/cadastro`}>
                        <Button variant="primary" size="lg">
                            Cadastrar
                        </Button>
                    </Link>
                </Col>
            </Row>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={8}>
                        <ListGroup as="ul">
                            {items.map((item) => (
                                <ListGroup.Item key={item.id} as="li" action>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {item.display_name ? (
                                            <span>{item.display_name}</span>
                                        ) : (
                                            <span>{item.nome}</span>
                                        )}
                                        <div>
                                            <Link
                                                to={`/${linkUpdate}/${item.id}`}
                                            >
                                                <Button
                                                    variant="light"
                                                    className="btn-sm"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Button>
                                            </Link>
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

export default CrudListComponent;
