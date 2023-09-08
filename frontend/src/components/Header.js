import React from "react";
import { Container, Nav, Navbar, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Igreja Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown
                                title="Cadastros"
                                id="basic-nav-dropdown"
                            >
                                <LinkContainer to="pessoas">
                                    <NavDropdown.Item>Pessoas</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="categorias">
                                    <NavDropdown.Item>
                                        Categorias
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="enderecos">
                                    <NavDropdown.Item>
                                        Endereços
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="estadoscivis">
                                    <NavDropdown.Item>
                                        Estados Civis
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="generos">
                                    <NavDropdown.Item>Generos</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="profissoes">
                                    <NavDropdown.Item>
                                        Profissoes
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="igrejas">
                                    <NavDropdown.Item>
                                        Igrejas
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            {!userInfo ? (
                                <LinkContainer to="login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <LinkContainer
                                    to="logout"
                                    onClick={logoutHandler}
                                >
                                    <Nav.Link>Logout</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
