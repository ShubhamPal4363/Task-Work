import React from 'react';
import LoginIcon from '../Assets/login-icon.png';
import RegisterIcon from '../Assets/register-icon.png';
import CartIcon from '../Assets/cart-icon.png';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="md" bg="body-tertiary" className="py-3 position-fixed w-100 top-0 z-1" style={{ fontSize: '1rem' }}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto ms-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Link className="nav-link text-dark" to="" style={{ fontSize: '1.3em' }}>
                Home
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item className='px-2'>
              <Nav.Link as={Link} to="/login" className="p-2 border rounded border-black" title="Login">
                <img src={LoginIcon} alt="Login-Icon" style={{ cursor: 'pointer' }} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='px-2'>
              <Nav.Link as={Link} to="/register" className="p-2 border rounded border-black" title="Register">
                <img src={RegisterIcon} alt="Register-Icon" style={{ cursor: 'pointer' }} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='px-2'>
              <Nav.Link as={Link} to="/cart" className="p-2 border rounded border-black" title="Cart">
                <img src={CartIcon} alt="Cart-Icon" style={{ cursor: 'pointer' }} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
