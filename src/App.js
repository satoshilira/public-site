import {Col, Divider, Row} from 'antd';
import topImage from './img/Group15.png';
import './App.css';

function App() {
  return (
    <Col className="home" style={{width: '80vw'}}>
      <Row align='center'>
        <img style={{width: '100%'}} src={topImage} alt="Satoshi LIRA Cryptocurrecy Revolution" />
      </Row>
      <Divider />
      <Row align='center'>
        <h1>Building Satoshi LIRA Ecosystem...</h1>
      </Row>
      <Row>
        <h2>Satoshi Lira is a revolutionary project which protocol allows to generate profit from decentralized finance apps, acting as engine
          for the creation of a democratic ecosystem oriented towards political and economical freedom of its community.</h2>
      </Row>
    </Col>
  );
}

export default App;
