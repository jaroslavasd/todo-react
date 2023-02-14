import logo from '../img/logo192.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" fixed="top">
        <Container fluid style={{ width: '80%' }}>
          <Navbar.Brand href="#home" style={{ fontSize: '18px' }}>
            <img
              alt=""
              src={logo}
              width="30px"
              height="30px"
              className="d-inline-block align-center"
            />{' '}
            TODO Awesome React App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
