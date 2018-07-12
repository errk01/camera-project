import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav'
import CameraList from './components/CameraList'
import Cart from './components/Cart'
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
      <Container fluid>
        <Row>
          <Col><CameraList/></Col>
          <Col><Cart/></Col>
        </Row>
      </Container>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
