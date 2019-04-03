import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import MuseBoard from './components/Muse-Board/MuseBoard';

class App extends Component {
  // constructor(props) {
  //   super(props); 
  //   this.state = {}
  // }
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
