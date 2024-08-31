import React from "react";
import { Container, Nav, Navbar, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/userActions";

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
                    <Nav.Link as={Link} to="/home">
                        <Navbar.Brand>Corporys</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            {userInfo && (
                                <NavDropdown
                                    title="Cadastros"
                                    id="basic-nav-dropdown"
                                >
                                    <LinkContainer to="igrejas">
                                        <NavDropdown.Item>
                                            Igreja
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Divider />

                                    <LinkContainer to="categoriaspessoas">
                                        <NavDropdown.Item>
                                            Categorias de Pessoa
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to="generos">
                                        <NavDropdown.Item>
                                            Genero
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to="profissoes">
                                        <NavDropdown.Item>
                                            Profissão
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="estadoscivis">
                                        <NavDropdown.Item>
                                            Estado Civil
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="pessoas">
                                        <NavDropdown.Item>
                                            Pessoa
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Divider />

                                    <LinkContainer to="versiculos">
                                        <NavDropdown.Item>
                                            Versiculo
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="carrosselimagens">
                                        <NavDropdown.Item>
                                            Carrossel Imagem
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="categoriasnoticias">
                                        <NavDropdown.Item>
                                            Categoria de Notícia
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="noticias">
                                        <NavDropdown.Item>
                                            Noticia
                                        </NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to="eventos">
                                        <NavDropdown.Item>
                                            Evento
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="eventosaovivo">
                                        <NavDropdown.Item>
                                            Evento ao Vivo
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}

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
