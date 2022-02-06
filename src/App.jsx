import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header setState={setState}/>
        </Row>
        <Row>
          <Body state={state}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
