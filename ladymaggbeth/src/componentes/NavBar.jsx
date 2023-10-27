import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="warning" data-bs-theme="warning">
        <Container>
          <Navbar.Brand href="#home">Lady Maggbeth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gorros</Nav.Link>
            <Nav.Link href="#features">Bolsas</Nav.Link>
            <Nav.Link href="#pricing">Coasters</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};

