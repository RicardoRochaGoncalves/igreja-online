// src/components/Noticias/NoticiasListComponent.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import NoticiaCardComponent from './NoticiaCardComponent';

function NoticiaListComponent({ noticias }) {
    // Ordena as notícias da mais recente para a mais antiga
    const noticiasOrdenadas = noticias.sort((a, b) => new Date(b.data_postagem) - new Date(a.data_postagem));

    return (
        <Row>
            {noticiasOrdenadas.map((noticia) => (
                <Col key={noticia.id} sm={12} md={4} lg={4} xl={4}>  {/* Ajustando para 3 cards por linha */}
                    <NoticiaCardComponent noticia={noticia} />
                </Col>
            ))}
        </Row>
    );
}

export default NoticiaListComponent;
