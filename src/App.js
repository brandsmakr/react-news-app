import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  c = 'talha';
  render() {
    return (
      <div>
        {/* <h1>Hello, I am class base Component {this.c}</h1> */}
        <Navbar />
        <News />
      </div>
    )
  }
}
