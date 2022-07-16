import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import React, { Component } from "react";
import News from "./Components/News";

import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // c = "talha";
  newsKey = process.env.REACT_APP_NEWS_API

  pSize = 14;

  state = {
    progress: 0,
  };

  setProgress = (progress)=>{
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        {/* <h1>Hello, I am class base Component {this.c}</h1> */}
        <Router>
          <Navbar />
          <LoadingBar
            color="#157347"
            progress={this.state.progress}
            shadow={true}
            height={5}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.newsKey}  pageSize={this.pSize} key="home" />}
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  category="sports"
                  pageSize={this.pSize}
                  country="us"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.newsKey} 
                  pageSize={this.pSize}
                  country="us"
                  category="technology"
                  key="technology"
                />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
