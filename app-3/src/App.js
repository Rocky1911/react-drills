import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      won: ["Larry", "Curly", "Moe"]
    }
  }

  handleChange(filter) {
    this.setState({ won: filter })
  }



  render() {
    let rain = this.state.won.filter((element, index) => {
      return element.includes(this.state.won);
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        {rain}
      </div>
    );
  }
}

export default App;
