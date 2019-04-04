import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MuseBoard from './components/Muse-Board/MuseBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MuseBoard />
      </div>
    );
  }
}

export default App;
