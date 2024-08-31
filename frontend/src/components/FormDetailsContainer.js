import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FormDetailsContainer({ children }) {
  return (
        <Row className="justify-content-md-start">
            <Col xs={12} md={8}>
                {children}
            </Col>
        </Row>
  );
}

export default FormDetailsContainer;
