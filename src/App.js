import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm react App</h1>
       <Person name="Kia" age="36">And I love singing!</Person>
       <Person name="Joy" age="40">My hobby is writing.</Person>
       <Person name="Cassandra" age="29" />
      </div>
    );
  }
}

export default App;
