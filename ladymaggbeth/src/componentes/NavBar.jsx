import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { products } from "../data/products"; 

const categories = products.map(item => item.category);
const uniqueCategories = new Set(categories);
 

export const NavBar = () => {
    return (
        <Navbar bg="warning" data-bs-theme="warning">
        <Container>
        <Nav.Link to="/"> 
          <Navbar.Brand>Lady Maggbeth</Navbar.Brand> 
        </Nav.Link>
          <Nav className="me-auto">
          {[...uniqueCategories].map ((item) => (
             <Nav.Link as={NavLink} key={item} to= {`/category/${item}`} >
                {item}
             </Nav.Link>
             ))}
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};
