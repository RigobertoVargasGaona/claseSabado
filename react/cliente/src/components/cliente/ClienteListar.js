
import React from "react";

import {Form, Button, Container, Alert, Spinner, Row, Col, Table } from 'react-bootstrap';


const ClienteListar=()=>{
    return(
    <Container>
       
            <Row clasName="mb-4">
                <Col>
                    <h2>Lista de clientes</h2>
                </Col>
                <Col clasName="text=end">
                    <button type="button" class="btn btn-primary">Agregar</button>

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
              
    </Container>);
}   

export default ClienteListar;