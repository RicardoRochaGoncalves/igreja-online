import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>Igreja Online &copy; 2024</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer