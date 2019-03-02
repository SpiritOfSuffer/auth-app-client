import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Register />
      </div>
    );
  }
}

export default App;
