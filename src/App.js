import { Container, Row, Col } from 'react-bootstrap';
import Alcometer from './Alcometer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App py-5">

      <Container>
        <Row>
          <Col>
            <h1>H1: Alcometer</h1>
            <p className="lead pt-2">Calculate blood alcohol level</p>
          </Col>
        </Row>

        <Row className="pt-4 pb-5 mb-5">
          <Col lg={6}>
            <Alcometer />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <p>&copy; 2021: Oskari Järvelin, TIK20KM.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
