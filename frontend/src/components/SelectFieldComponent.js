import React from "react";
import { Form } from "react-bootstrap";

function SelectFieldComponent({
    options,
    value,
    initialValue,
    onChange,
    isEditing,
}) {
    return (
        <Form.Control
            value={!isEditing ? initialValue : value}
            onChange={onChange}
            as="select"
            disabled={!isEditing}
        >
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.nome}
                </option>
            ))}
        </Form.Control>
    );
}

export default SelectFieldComponent;
