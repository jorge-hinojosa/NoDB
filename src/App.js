import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Muse from './components/Muse/Muse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Muse />
      </div>
    );
  }
}

export default App;
