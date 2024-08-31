import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function CepField({ value, onChange, onButtonClick, initialValue, isEditing }) {
    return (
        <InputGroup>
            <Form.Control
                placeholder="CEP"
                value={!isEditing ? initialValue : value}
                disabled={!isEditing}
                onChange={onChange}
            />
            <Button
                variant="primary"
                disabled={!isEditing}
                onClick={onButtonClick}
            >
                Buscar
            </Button>
        </InputGroup>
    );
}

export default CepField;
