import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GeneroListScreen from "./screens/GeneroListScreen";
import LoginListScreen  from "./screens/LoginScreen";
import CategoriaListScreen from "./screens/CategoriaListScreen";
import EnderecoListScreen from "./screens/EnderecoListScreen";
import EstadoCivilListScreen from "./screens/EstadoCivilListScreen";
import IgrejaListScreen from "./screens/IgrejaListScreen";
import PessoaListScreen from "./screens/PessoaListScreen";
import ProfissaoListScreen from "./screens/ProfissaoListScreen";
import CategoriaDetailsScreen from "./screens/CategoriaDetailsScreen";
import EnderecoDetailsScreen from "./screens/EnderecoDetailsScreen";
import EstadoCivilDetailsScreen from "./screens/EstadoCivilDetailsScreen";
import GeneroDetailsScreen from "./screens/GeneroDetailsScreen";
import IgrejaDetailsScreen from "./screens/IgrejaDetailsScreen";
import PessoaDetailsScreen from "./screens/PessoaDetailsScreen";
import ProfissaoDetailsScreen from "./screens/ProfissaoDetailsScreen";


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
                        <Route path="/estadocivil" element={<EstadoCivilListScreen />} />
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

                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
