import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';

export const AgreagarCliente = () => {
    const [FormData, setData] = useState({
        NombreCliente: '',
        DocumentoCliente: '',
        ApellidosCliente: '',
        EmailCliente: '',
        TelefonoCliente: '',
        DireccionCliente: '',
    });

    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...FormData,
            [name]: value,
        });
    };

    const enviartDatos = (e) => {
        //e.preventDefault(); // <-- importante: evita recargar la página
        setMostrarAlerta(true);
        console.log('Datos enviados', FormData);
    };

    return (
        <Container className='mt-3' style={{ maxWidth: '600px' }}>
            <Card>
                <Card.Header>
                    <h3>Agregar nuevo cliente</h3>
                    {mostrarAlerta && (
                        <Alert variant='success' onClose={() => setMostrarAlerta(false)} dismissible>
                            Datos enviados correctamente!...
                        </Alert>
                    )}
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={enviartDatos}>
                        <Form.Group className='mb-3' controlId='NombreCliente'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="NombreCliente"
                                value={FormData.NombreCliente}
                                onChange={handleChange}
                                placeholder='Digite el nombre del cliente'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='DocumentoCliente'>
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                type="text"
                                name="DocumentoCliente"
                                value={FormData.DocumentoCliente}
                                onChange={handleChange}
                                placeholder='Digite el documento del cliente'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='ApellidosCliente'>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                type="text"
                                name="ApellidosCliente"
                                value={FormData.ApellidosCliente}
                                onChange={handleChange}
                                placeholder='Digite los apellidos del cliente'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='EmailCliente'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="EmailCliente"
                                value={FormData.EmailCliente}
                                onChange={handleChange}
                                placeholder='Digite el Email del cliente'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='TelefonoCliente'>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                                name="TelefonoCliente"
                                value={FormData.TelefonoCliente}
                                onChange={handleChange}
                                placeholder='Digite el teléfono del cliente'
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='DireccionCliente'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="DireccionCliente"
                                value={FormData.DireccionCliente}
                                onChange={handleChange}
                                placeholder='Digite la dirección del cliente'
                            />
                        </Form.Group>

                        <Button variant="primary" type='submit'>Guardar</Button>
                        <Button variant="danger" type='button'>Cancelar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};
