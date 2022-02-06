import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const Header = ({setState}) => {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">EUPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={(key) => setState(key)}>
              <NavDropdown title="Documents">
                <NavDropdown.Item eventKey={1}>App Descriptions</NavDropdown.Item>
                <NavDropdown.Item eventKey={2}>Pre-Interview Notes</NavDropdown.Item>
                <NavDropdown.Item eventKey={3}>Interview Notes</NavDropdown.Item>
                <NavDropdown.Item eventKey={4}>Meeting Minutes</NavDropdown.Item>
                <NavDropdown.Item eventKey={5}>Burndown Chart</NavDropdown.Item>
                <NavDropdown.Item eventKey={6}>Interaction Design</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
