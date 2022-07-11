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

  pSize = 14;

  render() {
    return (
      <div>
        {/* <h1>Hello, I am class base Component {this.c}</h1> */}
        <Router>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              element={<News pageSize={this.pSize} key="home" />}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={this.pSize} country="us" category="business" key="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News pageSize={this.pSize} country="us" category="entertainment" key="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News pageSize={this.pSize} country="us" category="general" key="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News pageSize={this.pSize} country="us" category="health" key="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize={this.pSize} country="us" category="science" key="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News category="sports" pageSize={this.pSize} country="us" key="sports"  />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News pageSize={this.pSize} country="us" category="technology" key="technology" />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
