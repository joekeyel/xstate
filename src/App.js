import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        </header>
      </nav>
        <Main name = {this.props.name}/>
      
      </div>
    );
  }
}

export default App;
