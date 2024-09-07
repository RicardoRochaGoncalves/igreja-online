import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import GeneroListPage from "./pages/AreaRestrita/Genero/GeneroListPage";
import CarrosselImagemListPage from "./pages/AreaRestrita/CarrosselImagem/CarrosselImagemListPage";
import PessoaListPage from "./pages/AreaRestrita/Pessoa/PessoaListPage";
import IgrejaListPage from "./pages/AreaRestrita/Igreja/IgrejaListPage";
import CategoriaNoticiaListPage from "./pages/AreaRestrita/CategoriaNoticia/CategoriaNoticiaListPage";
import CategoriaPessoaListPage from "./pages/AreaRestrita/CategoriaPessoa/CategoriaPessoaListPage";
import NoticiaListPage from "./pages/AreaRestrita/Noticia/NoticiaListPage";
import EstadoCivilListPage from "./pages/AreaRestrita/EstadoCivil/EstadoCivilListPage";
import EventoAoVivoListPage from "./pages/AreaRestrita/EventoAoVivo/EventoAoVivoListPage";
import EventoListPage from "./pages/AreaRestrita/Evento/EventoListPage";
import ProfissaoListPage from "./pages/AreaRestrita/Profissao/ProfissaoListPage";
import VersiculoListPage from "./pages/AreaRestrita/Versiculo/VersiculoListPage";
import GeneroDetailsPage from "./pages/AreaRestrita/Genero/GeneroDetailsPage";
import CarrosselImagemDetailsPage from "./pages/AreaRestrita/CarrosselImagem/CarrosselImagemDetailsPage";
import VersiculoDetailsPage from "./pages/AreaRestrita/Versiculo/VersiculoDetailsPage";
import ProfissaoDetailsPage from "./pages/AreaRestrita/Profissao/ProfissaoDetailsPage";
import PessoaDetailsPage from "./pages/AreaRestrita/Pessoa/PessoaDetailsPage";
import NoticiaDetailsPage from "./pages/AreaRestrita/Noticia/NoticiaDetailsPage";
import IgrejaDetailsPage from "./pages/AreaRestrita/Igreja/IgrejaDetailsPage";
import EventoAoVivoDetailsPage from "./pages/AreaRestrita/EventoAoVivo/EventoAoVivoDetailsPage";
import EventoDetailsPage from "./pages/AreaRestrita/Evento/EventoDetailsPage";
import EstadoCivilDetailsPage from "./pages/AreaRestrita/EstadoCivil/EstadoCivilDetailsPage";
import CategoriaPessoaDetailsPage from "./pages/AreaRestrita/CategoriaPessoa/CategoriaPessoaDetailsPage";
import CategoriaNoticiaDetailsPage from "./pages/AreaRestrita/CategoriaNoticia/CategoriaNoticiaDetailsPage";
import GeneroCreatePage from "./pages/AreaRestrita/Genero/GeneroCreatePage";
import CategoriaPessoaCreatePage from "./pages/AreaRestrita/CategoriaPessoa/CategoriaPessoaCreatePage";
import ProfissaoCreatePage from "./pages/AreaRestrita/Profissao/ProfissaoCreatePage";
import EstadoCivilCreatePage from "./pages/AreaRestrita/EstadoCivil/EstadoCivilCreatePage";
import VersiculoCreatePage from "./pages/AreaRestrita/Versiculo/VersiculoCreatePage";
import EventoAoVivoCreatePage from "./pages/AreaRestrita/EventoAoVivo/EventoAoVivoCreatePage";
import EventoCreatePage from "./pages/AreaRestrita/Evento/EventoCreatePage";
import NoticiaCreatePage from "./pages/AreaRestrita/Noticia/NoticiaCreatePage";
import CategoriaNoticiaCreatePage from "./pages/AreaRestrita/CategoriaNoticia/CategoriaNoticiaCreatePage";
import CarrosselImagemCreatePage from "./pages/AreaRestrita/CarrosselImagem/CarrosselImagemCreatePage";
import PessoaCreatePage from "./pages/AreaRestrita/Pessoa/PessoaCreatePage";
import IgrejaCreatePage from "./pages/AreaRestrita/Igreja/IgrejaCreatePage";
import CategoriaAgendaListPage from "./pages/AreaRestrita/CategoriaAgenda/CategoriaAgendaListPage";
import AgendaListPage from "./pages/AreaRestrita/Agenda/AgendaListPage";
import CategoriaAgendaCreatePage from "./pages/AreaRestrita/CategoriaAgenda/CategoriaAgendaCreatePage";
import AgendaCreatePage from "./pages/AreaRestrita/Agenda/AgendaCreatePage";
import AgendaDetailsPage from "./pages/AreaRestrita/Agenda/AgendaDetailsPage";
import CategoriaAgendaDetailsPage from "./pages/AreaRestrita/CategoriaAgenda/CategoriaAgendaDetailsPage";
import HomePage from "./pages/Public/HomePage/HomePage";


function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/generos" element={<GeneroListPage />} />
                        <Route path="/carrosselimagens" element={<CarrosselImagemListPage />} />
                        <Route path="/pessoas" element={<PessoaListPage />} />
                        <Route path="/igrejas" element={<IgrejaListPage />} />
                        <Route path="/categoriasnoticias" element={<CategoriaNoticiaListPage />} />
                        <Route path="/categoriaspessoas" element={<CategoriaPessoaListPage />} />
                        <Route path="/noticias" element={<NoticiaListPage />} />
                        <Route path="/estadoscivis" element={<EstadoCivilListPage />} />
                        <Route path="/eventosaovivo" element={<EventoAoVivoListPage />} />
                        <Route path="/eventos" element={<EventoListPage />} />
                        <Route path="/profissoes" element={<ProfissaoListPage />} />
                        <Route path="/versiculos" element={<VersiculoListPage />} />
                        <Route path="/generos/:id" element={<GeneroDetailsPage />} />
                        <Route path="/carrosselimagens/:id" element={<CarrosselImagemDetailsPage />} />
                        <Route path="/versiculos/:id" element={<VersiculoDetailsPage />} />
                        <Route path="/profissoes/:id" element={<ProfissaoDetailsPage />} />
                        <Route path="/pessoas/:id" element={<PessoaDetailsPage />} />
                        <Route path="/noticias/:id" element={<NoticiaDetailsPage />} />
                        <Route path="/igrejas/:id" element={<IgrejaDetailsPage />} />
                        <Route path="/eventosaovivo/:id" element={<EventoAoVivoDetailsPage />} />
                        <Route path="/eventos/:id" element={<EventoDetailsPage />} />
                        <Route path="/estadoscivis/:id" element={<EstadoCivilDetailsPage />} />
                        <Route path="/categoriaspessoas/:id" element={<CategoriaPessoaDetailsPage />} />
                        <Route path="/categoriasnoticias/:id" element={<CategoriaNoticiaDetailsPage />} />
                        <Route path="/generos/cadastro" element={<GeneroCreatePage />} />
                        <Route path="/categoriaspessoas/cadastro" element={<CategoriaPessoaCreatePage />} />
                        <Route path="/profissoes/cadastro" element={<ProfissaoCreatePage />} />
                        <Route path="/estadoscivis/cadastro" element={<EstadoCivilCreatePage />} />
                        <Route path="/versiculos/cadastro" element={<VersiculoCreatePage />} />
                        <Route path="/eventosaovivo/cadastro" element={<EventoAoVivoCreatePage />} />
                        <Route path="/eventos/cadastro" element={<EventoCreatePage />} />
                        <Route path="/noticias/cadastro" element={<NoticiaCreatePage />} />
                        <Route path="/categoriasnoticias/cadastro" element={<CategoriaNoticiaCreatePage />} />
                        <Route path="/carrosselimagens/cadastro" element={<CarrosselImagemCreatePage />} />
                        <Route path="/pessoas/cadastro" element={<PessoaCreatePage />} />
                        <Route path="/igrejas/cadastro" element={<IgrejaCreatePage />} />
                        <Route path="/categoriasagendas" element={<CategoriaAgendaListPage />} />
                        <Route path="/agendas" element={<AgendaListPage />} />
                        <Route path="/categoriasagendas/cadastro" element={<CategoriaAgendaCreatePage />} />
                        <Route path="/agendas/cadastro" element={<AgendaCreatePage />} />
                        <Route path="/agendas/:id" element={<AgendaDetailsPage />} />
                        <Route path="/categoriasagendas/:id" element={<CategoriaAgendaDetailsPage />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
