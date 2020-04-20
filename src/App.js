import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import "./reset.css"


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}