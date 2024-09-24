import '../App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoCorhuila from '../logoCorhuila.jpg';
import Login from '../components/Login';
import Home from '../components/Home';
import Agendas from '../components/Agendas';
import iconUser from '../vectores/person-circle.svg';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavDropdown, Nav} from 'react-bootstrap';

function Navbarnew() {

  return (
    <>
      <Navbar className='custom-navbar'>
        <Navbar.Brand as={Link} to="/Home"><img className='logo' variant="success" alt="logo" src={logoCorhuila} /></Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link className="text-success fs-5" href="#agendas">Agendas</Nav.Link>
          <Nav.Link className="text-success fs-5" href="/Agendas">Formulario</Nav.Link>
        </Nav>
        <NavDropdown align="end" title={<img className='icon-user text-success' src={iconUser} alt="CORHUILA Logo" />} id="basic-nav-dropdown" flip>
          <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Cerrar Sesión</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
      </>
  )

  
};
export default Navbarnew;