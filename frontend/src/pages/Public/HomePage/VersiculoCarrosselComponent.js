// VersiculoCarrosselComponent.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

function VersiculoCarrosselComponent({ versiculos }) {
    return (
        <Carousel interval={5000}>  {/* Removemos controls e indicators para habilitar as setas */}
            {versiculos.map((versiculo, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px', textAlign: 'center' }}>
                        <h2>{`${versiculo.livro} ${versiculo.capitulo}:${versiculo.versiculo}`}</h2>
                        <p>{versiculo.texto}</p>
                        {versiculo.mensagem && <p><em>{versiculo.mensagem}</em></p>}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default VersiculoCarrosselComponent;
