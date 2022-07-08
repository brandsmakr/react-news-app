import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import News from "./Components/News";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  c = "talha";
  render() {
    return (
      <div>
        {/* <h1>Hello, I am class base Component {this.c}</h1> */}
        <Router>
          <Navbar />

          <Switch>
            <Route
              key="hm"
              exact
              path="/"
              element={<News pageSize={15} />}
            />
            <Route
              key="bs"
              exact
              path="/business"
              element={<News pageSize={15} country="us" category="business" />}
            />
            <Route
              key="en"
              exact
              path="/entertainment"
              element={
                <News pageSize={15} country="us" category="entertainment" />
              }
            />
            <Route
              key="gn"
              exact
              path="/general"
              element={<News pageSize={15} country="us" category="general" />}
            />
            <Route
              key="hl"
              exact
              path="/health"
              element={<News pageSize={15} country="us" category="health" />}
            />
            <Route
              key="sc"
              exact
              path="/science"
              element={<News pageSize={15} country="us" category="science" />}
            />
            <Route
              key="sp"
              exact
              path="/sports"
              element={<News pageSize={15} country="us" category="sports" />}
            />
            <Route
              key="tc"
              exact
              path="/technology"
              element={
                <News pageSize={15} country="us" category="technology" />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
