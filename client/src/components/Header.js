import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link eventKey="1" as={Link} to="/cart">
                <i className="fas fa-shopping-cart" /> Cart
              </Nav.Link>

              <Nav.Link eventKey="2" as={Link} to="/login">
                <i className="fas fa-user" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
