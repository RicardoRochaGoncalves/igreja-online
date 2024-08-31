import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateFieldComponent({ selectedDate, onDateChange, isEditing }) {
    const handleChange = (date) => {
        onDateChange(date);
    };

    return (
        <Form.Group controlId="data">
            <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                isClearable
                disabled={!isEditing}  // Desabilita o campo se não estiver no modo de edição
                className="form-control"
            />
        </Form.Group>
    );
}

export default DateFieldComponent;
