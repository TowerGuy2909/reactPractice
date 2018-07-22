import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id:'asfa1', name: 'Jerridd', age: 39},
      {id:'vasdf1', name: 'Jill', age: 38},
      {id:'asdf11', name: 'Donovan', age: 11},
    ],
    otherState: "some other value",
    showPersons: false
  }

  
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons =[...this.state.persons];
  persons[personIndex] = person;


  this.setState( {persons: persons} )
    
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {


    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}/>
       </div> 
      );
       btnClass = classes.Red;
    }

    const assignedClasses = [];
      if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
      }
      if (this.state.persons.length <=1) {
        assignedClasses.push(classes.bold);
      }


    return (
     
        <div className={classes.App}>
        <h1> Hi, im a new react app </h1>
        <p className={assignedClasses.join(' ')} > this is realy working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
     
    );
  }
}

export default App;
