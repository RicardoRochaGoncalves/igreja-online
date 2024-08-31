// HomePage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import CarrosselImagemComponent from "./CarrosselImagemComponent";
import VersiculoCarrosselComponent from "./VersiculoCarrosselComponent";
import NoticiaListComponent from "../../../components/Noticias/NoticiaListComponent";
import EventoListComponent from "../../../components/Eventos/EventoListComponent";
import EventoAoVivoListComponent from "../../../components/EventoAoVivo/EventoAoVivoListComponent";
import { listCarrosselImagens } from "../../../store/actions/carrosselImagemActions";
import { listVersiculos } from "../../../store/actions/versiculoActions";
import { listNoticias } from "../../../store/actions/noticiaActions";
import { listEventos } from "../../../store/actions/eventoActions";
import { listEventosAoVivo } from "../../../store/actions/eventoAoVivoActions";

function HomePage() {
    const dispatch = useDispatch();

    const carrosselImagemList = useSelector(
        (state) => state.carrosselImagemList
    );
    const {
        loading: loadingCarrossel,
        error: errorCarrossel,
        carrosselImagens,
    } = carrosselImagemList;

    const versiculoList = useSelector((state) => state.versiculoList);
    const {
        loading: loadingVersiculos,
        error: errorVersiculos,
        versiculos,
    } = versiculoList;

    const noticiasList = useSelector((state) => state.noticiaList);
    const {
        loading: loadingNoticias,
        error: errorNoticias,
        noticias,
    } = noticiasList;

    const eventosList = useSelector((state) => state.eventoList);
    const {
        loading: loadingEventos,
        error: errorEventos,
        eventos,
    } = eventosList;

    const eventosAoVivoList = useSelector((state) => state.eventoAoVivoList);
    const {
        loading: loadingEventosAoVivo,
        error: errorEventosAoVivo,
        eventosAoVivo,
    } = eventosAoVivoList;

    const eventosAtivosRecentes = eventos
        ? eventos
              .filter((evento) => evento.ativo)
              .sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento))
              .slice(0, 3)
        : [];

    useEffect(() => {
        dispatch(listCarrosselImagens());
        dispatch(listVersiculos());
        dispatch(listNoticias());
        dispatch(listEventos());
        dispatch(listEventosAoVivo());
    }, [dispatch]);

    // Filtra as imagens e versículos que estão ativos
    const imagensAtivas = carrosselImagens
        ? carrosselImagens.filter((img) => img.ativo)
        : [];
    const versiculosAtivos = versiculos
        ? versiculos.filter((verso) => verso.ativo)
        : [];
    const noticiasAtivasRecentes = noticias
        ? noticias
              .filter((noticia) => noticia.ativo)
              .sort(
                  (a, b) =>
                      new Date(b.data_postagem) - new Date(a.data_postagem)
              )
              .slice(0, 3)
        : [];
    const eventosAoVivoAtivosRecentes = eventosAoVivo
        ? eventosAoVivo
              .filter((evento) => evento.ativo)
              .sort((a, b) => new Date(a.data_evento) - new Date(b.data_evento))
              .slice(0, 3)
        : [];

    return (
        <Container fluid className="p-2">
            <div className="mt-5">
                {loadingCarrossel ? (
                    <Loader />
                ) : errorCarrossel ? (
                    <Message variant="danger">{errorCarrossel}</Message>
                ) : (
                    <CarrosselImagemComponent imagens={imagensAtivas} />
                )}
            </div>

            <div className="mt-5">
                {loadingVersiculos ? (
                    <Loader />
                ) : errorVersiculos ? (
                    <Message variant="danger">{errorVersiculos}</Message>
                ) : (
                    <VersiculoCarrosselComponent
                        versiculos={versiculosAtivos}
                    />
                )}
            </div>
            <div className="mt-5">
                <h2>Notícias Recentes</h2>
                {loadingNoticias ? (
                    <Loader />
                ) : errorNoticias ? (
                    <Message variant="danger">{errorNoticias}</Message>
                ) : (
                    <NoticiaListComponent noticias={noticiasAtivasRecentes} />
                )}
            </div>

            <div className="mt-5">
                <h2>Próximos Eventos</h2>
                {loadingEventos ? (
                    <Loader />
                ) : errorEventos ? (
                    <Message variant="danger">{errorEventos}</Message>
                ) : (
                    <EventoListComponent eventos={eventosAtivosRecentes} />
                )}
            </div>

            <div className="mt-5">
                <h2>Eventos ao Vivo</h2>
                {loadingEventosAoVivo ? (
                    <Loader />
                ) : errorEventosAoVivo ? (
                    <Message variant="danger">{errorEventosAoVivo}</Message>
                ) : (
                    <EventoAoVivoListComponent
                        eventos={eventosAoVivoAtivosRecentes}
                    />
                )}
            </div>
        </Container>
    );
}

export default HomePage;
