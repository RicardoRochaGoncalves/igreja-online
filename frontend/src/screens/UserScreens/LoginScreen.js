import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import FormContainer from "../../components/FormContainer";
import { login } from "../../actions/userActions";

function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <div>
            {!userInfo && (
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
                            <Link
                                to={
                                    redirect
                                        ? `/register?redirect=${redirect}`
                                        : "/register"
                                }
                            >
                                Cadastre-se
                            </Link>
                        </Col>
                    </Row>
                </FormContainer>
            )}
        </div>
    );
}

export default LoginScreen;
