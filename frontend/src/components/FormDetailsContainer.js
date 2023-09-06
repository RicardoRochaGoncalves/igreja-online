import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' 

function FormDetailsContainer({children}) {
  return (
    <Container>
        <Row>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormDetailsContainer