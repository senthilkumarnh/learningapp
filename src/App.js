import React from 'react'; 
import ApplicationNavigation from './Components/navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import WordsSearch from './Pages/WordsSearch'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <ApplicationNavigation></ApplicationNavigation>
        <Router>
          <Switch>
            <Route path="/home"> 
              <WordsSearch></WordsSearch>
            </Route>
          </Switch>
        </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
