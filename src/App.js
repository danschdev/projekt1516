import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Beers from './components/Beers'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Projekt 1516</h1>
        <div className="header-bar">
          <Beers/>
        </div>
      </div>
    );
  }
}

export default App;
