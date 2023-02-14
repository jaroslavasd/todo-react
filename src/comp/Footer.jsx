import qrcode from '../img/qrcode.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer() {
  return (
    <div className="footer">
      <Container fluid className="bg-white">
        <Row className="justify-content-md-center">
          <Col>by Simona and Jaroslavas @Wix</Col>
        </Row>
        <Row className="md-center">
          <Col>
            <img
              alt=""
              src={qrcode}
              width="150em"
              height="150em"
              className="d-inline-block align-center"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
