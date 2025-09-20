
import React from "react";

import {Form, Button, Container, Alert, Spinner, Row, Col, Table,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClienteListar=()=>{
    return(
    <Container>
       
            <Row clasName="mb-4">
                <Col>
                    <h2>Lista de clientes</h2>
                </Col>
                <Col clasName="text-end">
                    <Button as={ Link }  to ="/cliente/AgreagarCliente"  variant="primary" >Agregar</Button>

                </Col>
            </Row>
            <Form className="mb-3">
                <Row>
                    <Col md={8}>
                        <Form.Control 
                            type="text"
                            placeholder="Buscar por documento de idnetidad"
                        />
                    </Col>
                    <Col className="d-flex gap-2"  md={4}>
                        <button type="button" class="btn btn-outline-secondary ">Buscar</button>
                        <button type="button" class="btn btn-outline-secondary">Mostrar todos</button>
                                         
                    </Col>
                </Row>
            </Form >
            <Table class="table table-active table-hover">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Documento</td>
                        <td>Apellidos</td>
                        <td>Email</td>
                        <td>Telefono</td>
                        <td>Direccion</td>
                       <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rigo</td>
                        <td>1057164110</td>
                        <td>Vargas Gaona</td>
                        <td>rigotk@hotmail.com</td>
                        <td>3228642678</td>
                        <td>Cr 32#43-03</td>
                        <td  className="d-flex gap-2">
                           <button type="button" class="btn btn-warning">Editar</button>
                           <button type="button" class="btn btn-danger">Danger</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Rigo</td>
                        <td>1057164110</td>
                        <td>Vargas Gaona</td>
                        <td>rigotk@hotmail.com</td>
                        <td>3228642678</td>
                        <td>Cr 32#43-03</td>
                          <td  className="d-flex gap-2">
                           <button type="button" class="btn btn-warning">Editar</button>
                           <button type="button" class="btn btn-danger">Danger</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Rigo</td>
                        <td>1057164110</td>
                        <td>Vargas Gaona</td>
                        <td>rigotk@hotmail.com</td>
                        <td>3228642678</td>
                        <td>Cr 32#43-03</td>
                          <td  className="d-flex gap-2">
                           <button type="button" class="btn btn-warning">Editar</button>
                           <button type="button" class="btn btn-danger">Danger</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Rigo</td>
                        <td>1057164110</td>
                        <td>Vargas Gaona</td>
                        <td>rigotk@hotmail.com</td>
                        <td>3228642678</td>
                        <td>Cr 32#43-03</td>
                          <td  className="d-flex gap-2">
                           <button type="button" class="btn btn-warning">Editar</button>
                           <button type="button" class="btn btn-danger">Danger</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Rigo</td>
                        <td>1057164110</td>
                        <td>Vargas Gaona</td>
                        <td>rigotk@hotmail.com</td>
                        <td>3228642678</td>
                        <td>Cr 32#43-03</td>
                          <td  className="d-flex gap-2">
                           <button type="button" class="btn btn-warning">Editar</button>
                           <button type="button" class="btn btn-danger">Danger</button>
                        </td>
                    </tr>
                </tbody>

            </Table>
                    <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                        <a class="page-link" href="#" aria-current="page">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                    </nav>
              
    </Container>);
}   

export default ClienteListar;