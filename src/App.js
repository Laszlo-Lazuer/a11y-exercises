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
import Exercise3 from './Pages/Exercise3/index';
import Exercise4 from './Pages/Exercise4/index';
import Exercise5 from './Pages/Exercise5/index';
import Exercise6 from './Pages/Exercise6/index';

function App() {
  return (
      <Router>
        <main>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/ex1`}>
              <Exercise1 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex2`}>
              <Exercise2 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex3`}>
              <Exercise3 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex4`}>
              <Exercise4 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex6`}>
              <Exercise5 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex5`}>
              <Exercise6 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/`}>
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
