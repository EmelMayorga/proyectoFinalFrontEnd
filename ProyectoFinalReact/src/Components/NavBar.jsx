import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoProyectoF from '../Img/LogoProyectoF.png'
import '../Styles/NavBar.css'


function Navbar2() {
  return (
    <div>
          <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src={LogoProyectoF} alt="" srcset="" id="logoProyecto"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/Services">Servicios</Nav.Link>
          <Nav.Link href="/AboutUs">Sobre Nosotros</Nav.Link>
          <Nav.Link href="/Contact">Contacto</Nav.Link>

          <NavDropdown title="Otros" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Perfil">Registro</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navbar2
