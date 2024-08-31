import React from "react";
import { Form } from "react-bootstrap";

function CheckboxFieldComponent({ value, onChange, isEditing }) {
    return (
        <Form.Check 
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            disabled={!isEditing}
            label="Ativo"
        />
    );
}

export default CheckboxFieldComponent;
