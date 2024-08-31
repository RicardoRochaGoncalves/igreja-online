import React from 'react';
import { Card } from 'react-bootstrap';

function NoticiaCardComponent({ noticia }) {
    return (
        <Card className="mb-4" style={{ minWidth: '18rem' }}>
            <Card.Img variant="top" src={noticia.imagem} alt={noticia.titulo} style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>
                    {new Date(noticia.data_postagem).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NoticiaCardComponent;
