import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./Searchpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/search">
            <Searchpage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
