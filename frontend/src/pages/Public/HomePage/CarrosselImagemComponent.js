// CarrosselImagemComponent.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarrosselImagemComponent({ imagens }) {
    return (
        <Carousel>
            {imagens.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img.imagem} // Usando a propriedade imagem do seu objeto
                        alt={img.titulo} // Usando o título como texto alternativo
                        style={{ height: 'auto',  maxHeight: '600px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarrosselImagemComponent;
