import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"

import ResultsPage from "./components/Results Page/ResultsPage.js";
import Favorites from "./components/Favorites/Favorites.js";
import Home from "./components/Home/Home.js";

import Context from "./Context"

class App extends Component {
  render() {
    return (
      <Context>
        <Router className="App">
          <Route exact path="/bnb-advisor/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/results" component={ResultsPage} />
        </Router>
      </Context>
    );
  }
}

export default App;

