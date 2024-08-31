import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormDetailsContainer from "./FormDetailsContainer";
import { Link } from "react-router-dom";

function DetailsComponent({
    title,
    isEditing,
    handleEditClick,
    handleSaveClick,
    fields,
    additionalContent,
    backPath,
}) {
    return (
        <Container>
            <Row className="align-items-center mb-3">
                <Col xs={6} md={4}>
                    <h2>{title}</h2>
                </Col>
                <Col xs={6} md={4} className="text-end">
                    <Link to={backPath}>
                        <Button
                            variant="outline-primary"
                            size="lg"
                            className="me-2"
                        >
                            Voltar
                        </Button>
                    </Link>
                    {isEditing ? (
                        <Button
                            variant="success"
                            size="lg"
                            onClick={handleSaveClick}
                        >
                            Salvar
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleEditClick}
                        >
                            Editar
                        </Button>
                    )}
                </Col>
            </Row>
            <FormDetailsContainer>
                {fields.map((field) => (
                    <Form.Group className="mb-3" key={field.label}>
                        <Form.Label>{field.label}</Form.Label>
                        {field.component ? (
                            <div>{field.component}</div>
                        ) : (
                            <Form.Control
                                placeholder={field.placeholder}
                                disabled={!isEditing}
                                value={
                                    isEditing ? field.value : field.initialValue
                                }
                                onChange={field.onChange}
                            />
                        )}
                    </Form.Group>
                ))}
            </FormDetailsContainer>
            {additionalContent && <div>{additionalContent}</div>}
        </Container>
    );
}

export default DetailsComponent;
