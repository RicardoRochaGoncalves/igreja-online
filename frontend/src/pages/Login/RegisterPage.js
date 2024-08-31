// pages/RegisterPage.js

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { register } from "../../store/actions/userActions";

function RegisterPage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/"); // Sempre redireciona para a Home
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("As senhas não coincidem");
        } else {
            dispatch(register(nome, email, password));
        }
    };

    return (
        <FormContainer>
            <h1>Registrar</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="email" className="mt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password" className="mt-2">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword" className="mt-2">
                    <Form.Label>Confirme a Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-2">
                    Registrar
                </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Já tem uma conta? <Link to="/login">Login</Link>
                </Col>
            </Row>
        </FormContainer>
    );
}

export default RegisterPage;
