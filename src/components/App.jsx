import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import Button from './Button';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <Counter />
          <Button />
        </header>
      </div>;
  }
}

export default App;
