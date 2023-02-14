import logo from '../img/logo192.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" fixed="top">
        <Container fluid style={{ width: '70%' }}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TODO React App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
