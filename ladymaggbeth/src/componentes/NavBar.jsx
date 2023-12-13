import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="warning" data-bs-theme="warning">
        <Container>
        <Nav.Link to="/"> 
          <Navbar.Brand>Lady Maggbeth</Navbar.Brand> 
        </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} key="gorros" to={"/categoria/gorros"}>Gorros</Nav.Link>
            <Nav.Link as={NavLink} key="bolsas" to={"/categoria/bolsas"}>Bolsas</Nav.Link>
            <Nav.Link as={NavLink} key="coasters" to={"/categoria/coasters"}>Coasters</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};

