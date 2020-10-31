import React, { Component } from 'react';
import './Containers/App.css';
import Person from './Components/Persons/Person/Person';

class App extends Component{
  state ={
    persons:[ 
      {name: "Siva", age : 30},
      {name: "Raghu", age : 38},
      {name: "Thulasi", age : 27}
    ], 
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons=[...this.state.persons] ;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

   togglePersonHandler = () => {
   const doesShow= this.state.showPersons;
    this.setState({showPersons : !doesShow});
  };
  render(){

    const style= {
      backgroundColor: 'green',
      color: 'white',
      font:'inherit',
      border:'1px solid blue',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'yellow',
        color: 'black',
      }
    }
    let persons = null;
    if(this.state.showPersons){
      persons = this.state.persons.map((person, index) => {
        //() => this.deletePersonHandler(index)
        return (<Person click={this.deletePersonHandler.bind(index)} name={person.name} age={person.age}/>);
      });
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black',
      }
    }
        return (
          <div className="App">
            <h1 className="App-title">Welcome to React</h1>
            <button style={style} onClick={this.togglePersonHandler}>Toggle</button>
        {persons }
          </div>
        );
      }
}

export default App;
