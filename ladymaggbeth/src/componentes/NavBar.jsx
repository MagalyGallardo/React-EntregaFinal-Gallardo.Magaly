import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar className='navbarContainer' data-bs-theme="warning">
        <Container>
        <NavLink to="/" className="nav-link"> 
          <Navbar.Brand>Lady Maggbeth</Navbar.Brand> 
        </NavLink>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} key="gorros" to={"/categoria/Gorros"}>Gorros</Nav.Link>
            <Nav.Link as={NavLink} key="bolsas" to={"/categoria/Bolsas"}>Bolsas</Nav.Link>
            <Nav.Link as={NavLink} key="coasters" to={"/categoria/Coasters"}>Coasters</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    );
};

