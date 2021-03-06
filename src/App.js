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
import Exercise7 from './Pages/Exercise7/index';
import Exercise8 from './Pages/Exercise8/index';
import Exercise9 from './Pages/Exercise9/index';
import Exercise10 from './Pages/Exercise10/index';

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
            <Route path={`${process.env.PUBLIC_URL}/ex5`}>
              <Exercise5 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex6`}>
              <Exercise6 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex7`}>
              <Exercise7 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex8`}>
              <Exercise8 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex9`}>
              <Exercise9 />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/ex10`}>
              <Exercise10 />
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
