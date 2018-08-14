import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filtered: "",
      won: ["Larry", "Curly", "Moe"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    this.setState({ filtered: filter });
  }
  render() {
    const { won, filtered } = this.state;
    let rain = won
      .filter((element, index) => {
        return element.includes(filtered);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          value={this.state.filtered}
        />
        {rain}
      </div>
    );
  }
}

export default App;
