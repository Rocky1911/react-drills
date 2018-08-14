import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      one: [1, 2, 3, 4]
    };
  }
  render() {
    const { one } = this.state;
    let bond = one.map((e, i) => {
      return <div key={i}>{e}</div>;
    });
    return <div className="App">{bond}</div>;
  }
}

export default App;
