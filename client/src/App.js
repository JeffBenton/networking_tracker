import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/">
                      <LandingPage />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
