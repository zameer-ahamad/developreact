import React from "react";
import About from "./about";
import Nav from "./nav";
import Home from "./home";
import SignInSignUp from "./signInSignUp/signInSignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function main() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/" exact component={Nav}></Route>
          <Route path="/signin" component={SignInSignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default main;
