import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3, 4]
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.arr}
      </div>
    );
  }
}

export default App;
