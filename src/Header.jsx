import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">RESTORN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto l-m">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">SERVICE</Nav.Link>
            <Nav.Link href="#">MENU</Nav.Link>
            <NavDropdown title="PAGES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Testimonial</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" id='book'>BOOK A TABLE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;