import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer() {
  return (
    <div className="footer">
      <Container fluid className="bg-white">
        <Row>
          <Col>@Wix by Simona and Jaroslavas</Col>
        </Row>
      </Container>
    </div>
  );
}
