import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/login">
          <Login />
        </Route>
        <Route exact={true} path="/register">
          <Register />
        </Route>
        <Route exact={true} path="/create">
          <Create />
        </Route>
        <Route exact={true} path="/account">
          <Account />
        </Route>
        <Route exact path={"/blog"}>
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
