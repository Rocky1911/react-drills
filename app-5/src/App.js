import React, { Component } from 'react';
import Image from './component/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image dog={"https://images.wagwalkingweb.com/media/daily_wag/name_guides/adorable-dog-names/hero/adorable-dog-names.jpg"} />

      </div>
    );
  }
}

export default App;
