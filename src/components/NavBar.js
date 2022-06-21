import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <NavBar bg='dark' variant="dark">
      <Container>
        <NavBar.Brand>React On-Screen Keyboard</NavBar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="https://github.com/niazisaad2198/react-on-screen-keyboard">
              Github
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </NavBar>
  );
}
