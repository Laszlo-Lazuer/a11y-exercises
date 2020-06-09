import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Home from './Pages/Home/index';
import Exercise1 from './Pages/Exercise1/index';
import Exercise2 from './Pages/Exercise2/index';

function App() {
  return (
      <Router>
        <main>
          <Switch>
            <Route path="/ex1">
              <Exercise1 />
            </Route>
            <Route path="/ex2">
              <Exercise2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
