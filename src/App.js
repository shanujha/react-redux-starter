import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./Routes";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {Routes.map((route) => (
            <Route path={route.path}>{route.component}</Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
