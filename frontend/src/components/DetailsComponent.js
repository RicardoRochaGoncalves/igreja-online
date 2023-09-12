import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormDetailsContainer from "./FormDetailsContainer";

function DetailsComponent({
    title,
    isEditing,
    handleEditClick,
    handleSaveClick,
    fields,
}) {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <h2>{title}</h2>
                </Col>
                <Col className="text-end" xs={6} md={4}>
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
                        {field.component ? ( // Verifique se o campo tem um componente personalizado
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
        </Container>
    );
}

export default DetailsComponent;
