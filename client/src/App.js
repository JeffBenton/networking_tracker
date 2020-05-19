import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/">
                      <LandingPage />
                  </Route>
                  <Route path="/home">
                      <HomePage />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
