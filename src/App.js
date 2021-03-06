import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {name:'Kia', age: 36},
      {name:'Joy', age: 40},
      {name:'Cassandra', age: 29}
    ],
    otherState: 'some other value',
    showPersons: false

  }

switchNameHandler =(newName)=>{
// console.log('was clicked');
this.setState({persons: [
  {name: newName, age: 36},
  {name:'Joy', age: 40},
  {name:'Cassandra', age: 59}

]})
}

//handler for changing the name through input field
nameChangedHandler = (event)=>{
  this.setState({
    persons: [
    {name: 'Max', age: 28},
    {name: event.target.value, age: 40},
    {name:'Cassandra', age: 19}
  ]
})
}

//on the button conditionally rendering Person components
togglePersonsHandler =()=>{
const doesShow = this.state.showPersons;
this.setState ({showPersons: !doesShow})
}
  

  render() {

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
}

  let persons = null;
if(this.state.showPersons){
  persons = (
<div>
  {this.state.persons.map(person =>{
    return <Person name={person.name} age={person.age}/>
  })}
       {/* <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}>And I love singing!</Person>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Lola')}
       changed={this.nameChangedHandler}>My hobby is writing.</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} 
       /> */}
       </div>
  )
}

    return (
      <div className="App">
       <h1>Hi, I'm react App</h1>
       <p>This is really working!</p>
       <button 
       style={style}
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {/* variable holding the conditionally rendered <Person /> s list component */}
      {persons}
      </div>
    );
  }
}

export default App;
