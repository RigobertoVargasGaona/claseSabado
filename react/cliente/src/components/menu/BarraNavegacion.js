import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {Link } from 'react-router-dom' 

const BarraNavegacion = () => {
  return (
    <Navbar bg='primary' variante="primary">
        <Container>
            <Navbar.Brand>Sistema de ventas</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic'>
                   <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/Dashboard">Inicio</Nav.Link>
                        <NavDropdown title="Clientes">
                            <NavDropdown.Item as={Link} to ="/cliente/ClienteListar">Lista de clientes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to ="/cliente/AgreagarCliente">Agregar Cliente</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> 
                </Navbar.Collapse>
        </Container>

    </Navbar>
    
  )
}

export default BarraNavegacion;