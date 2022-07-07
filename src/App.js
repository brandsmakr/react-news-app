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
              key="general"
              exact
              path="/"
              element={<News pageSize={15} />}
            />
            <Route
              key="business"
              exact
              path="/business"
              element={<News pageSize={15} country="us" category="business" />}
            />
            <Route
              key="entertainment"
              exact
              path="/entertainment"
              element={
                <News pageSize={15} country="us" category="entertainment" />
              }
            />
            <Route
              key="general"
              exact
              path="/general"
              element={<News pageSize={15} country="us" category="general" />}
            />
            <Route
              key="health"
              exact
              path="/health"
              element={<News pageSize={15} country="us" category="health" />}
            />
            <Route
              key="science"
              exact
              path="/science"
              element={<News pageSize={15} country="us" category="science" />}
            />
            <Route
              key="sports"
              exact
              path="/sports"
              element={<News pageSize={15} country="us" category="sports" />}
            />
            <Route
              key="technology"
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
