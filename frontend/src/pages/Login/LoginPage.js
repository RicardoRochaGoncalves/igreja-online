import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { login } from "../../store/actions/userActions";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/");  // Sempre redireciona para a Home
        }
    }, [navigate, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div>
            <FormContainer>
                <h1>Login</h1>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader></Loader>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite o Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label className="mt-2">Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite a Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary" className="mt-2">
                        Fazer Login
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        Usuário novo?{" "}
                        <Link to="/register">Cadastre-se</Link>
                    </Col>
                </Row>
            </FormContainer>
        </div>
    );
}

export default LoginPage;
