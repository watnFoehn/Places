import React, { Component } from "react";
import Header from "./Header/Header.js";
import List from "./List/List.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header appTitle="Places" />
        <List />
      </div>
    );
  }
}

export default App;
