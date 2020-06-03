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

function App() {
  return (
    <div className="App">
      <ApplicationNavigation></ApplicationNavigation>
      <Router>
        <Switch>
          <Route path="/home"> 
            <WordsSearch></WordsSearch>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
