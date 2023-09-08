import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GeneroListScreen from "./screens/ListScreens/GeneroListScreen";
import LoginListScreen  from "./screens/UserScreens/LoginScreen";
import CategoriaListScreen from "./screens/ListScreens/CategoriaListScreen";
import EnderecoListScreen from "./screens/ListScreens/EnderecoListScreen";
import EstadoCivilListScreen from "./screens/ListScreens/EstadoCivilListScreen";
import IgrejaListScreen from "./screens/ListScreens/IgrejaListScreen";
import PessoaListScreen from "./screens/ListScreens/PessoaListScreen";
import ProfissaoListScreen from "./screens/ListScreens/ProfissaoListScreen";
import CategoriaDetailsScreen from "./screens/DetailsScreens/CategoriaDetailsScreen";
import EnderecoDetailsScreen from "./screens/DetailsScreens/EnderecoDetailsScreen";
import EstadoCivilDetailsScreen from "./screens/DetailsScreens/EstadoCivilDetailsScreen";
import GeneroDetailsScreen from "./screens/DetailsScreens/GeneroDetailsScreen";
import IgrejaDetailsScreen from "./screens/DetailsScreens/IgrejaDetailsScreen";
import PessoaDetailsScreen from "./screens/DetailsScreens/PessoaDetailsScreen";
import ProfissaoDetailsScreen from "./screens/DetailsScreens/ProfissaoDetailsScreen";
import CategoriaCreateScreen from "./screens/CreateScreens/CategoriaCreateScreen";
import EnderecoCreateScreen from "./screens/CreateScreens/EnderecoCreateScreen";
import ProfissaoCreateScreen from "./screens/CreateScreens/ProfissaoCreateScreen";
import EstadoCivilCreateScreen from "./screens/CreateScreens/EstadoCivilCreateScreen";
import GeneroCreateScreen from "./screens/CreateScreens/GeneroCreateScreen";
import IgrejaCreateScreen from "./screens/CreateScreens/IgrejaCreateScreen";
import PessoaCreateScreen from "./screens/CreateScreens/PessoaCreateScreen";


function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/generos" element={<GeneroListScreen />} />
                        <Route path="/categorias" element={<CategoriaListScreen />} />
                        <Route path="/enderecos" element={<EnderecoListScreen />} />
                        <Route path="/estadoscivis" element={<EstadoCivilListScreen />} />
                        <Route path="/igrejas" element={<IgrejaListScreen />} />
                        <Route path="/pessoas" element={<PessoaListScreen />} />
                        <Route path="/profissoes" element={<ProfissaoListScreen />} />
                        <Route path="/login" element={<LoginListScreen />} />
                        <Route path="/categorias/:id" element={<CategoriaDetailsScreen />} />
                        <Route path="/enderecos/:id" element={<EnderecoDetailsScreen />} />
                        <Route path="/estadoscivis/:id" element={<EstadoCivilDetailsScreen />} />
                        <Route path="/generos/:id" element={<GeneroDetailsScreen />} />
                        <Route path="/igrejas/:id" element={<IgrejaDetailsScreen />} />
                        <Route path="/pessoas/:id" element={<PessoaDetailsScreen />} />
                        <Route path="/profissoes/:id" element={<ProfissaoDetailsScreen />} />
                        <Route path="/categorias/cadastro" element={<CategoriaCreateScreen />} />
                        <Route path="/enderecos/cadastro" element={<EnderecoCreateScreen />} />
                        <Route path="/profissoes/cadastro" element={<ProfissaoCreateScreen />} />
                        <Route path="/estadoscivis/cadastro" element={<EstadoCivilCreateScreen />} />
                        <Route path="/generos/cadastro" element={<GeneroCreateScreen />} />
                        <Route path="/igrejas/cadastro" element={<IgrejaCreateScreen />} />
                        <Route path="/pessoas/cadastro" element={<PessoaCreateScreen />} />



                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
