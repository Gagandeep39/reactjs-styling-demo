import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';
// Radium is a direct import,
// StyleRoot is a named import
// Styleroot wrapping is required ofr media query to work

function App() {
  // Creating a statehook
  // personState -> Used to access the values
  // setPersonState -> USed to change the values
  const [personState, setPersonState] = useState({
    persons: [
      { id: 'dfghyj', name: 'Gagan', age: 0 },
      { id: 'dgfhj', name: 'Ralts', age: 1 },
      { id: 'dfxgthy', name: 'Mewtwo', age: 2 },
      { id: 'cdfvgb', name: "Gallade", age: 3 },
    ],
    otherState: 'Lol xD',
  });

  // Will be executed whenever data is entered in text box
  const nameChangeHandler = (event, id) => {
    const personIndex = personState.persons.findIndex((p) => p.id === id);
    const person = { ...personState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({
      persons: persons,
    });
    console.log('Name change Method executed');
  };

  const [showHideState, setShowHideState] = useState({
    buttonState: false,
  });

  const showHideButtonHandler = (event) => {
    console.log('Toggled show hide');
    setShowHideState({
      buttonState: !showHideState.buttonState,
    });
  };

  // Added a sdelete button hadler
  const deleteButtonHandler = (personIndex) => {
    // Ass a good prcatie we must always update the arryain immute manner i.e without changing inital state
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons });
  };

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    // Requies radium package
    // Must be inside single quotes as they are not valid css properties in vanilla react
    ':hover': {
      backgroundColor: 'salmon',
      color: 'black',
    }
  }

  let personView = null;
  if(showHideState.buttonState) {
    personView =  (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              change={(event) => nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              deleteButton={() => deleteButtonHandler(index)}
            />
          );
        })}
      </div>
    )
    style.backgroundColor = 'red'
  } else personView = null;

  let classes = [];
  if(personState.persons.length <=2 )
    classes = ['red', 'bold'].join(' ');

  return (
    // <StyleRoot>
      // <div className='App'>
      //   <p className={classes}>Delete Elements tp chnge Css styling</p>
      //   <button style={style} onClick={showHideButtonHandler}>Show/Hide Persons</button>
      //   {personView}
      // </div>
    // </StyleRoot>
    
    <div className='App'>
      <p className={classes}>Delete Elements tp chnge Css styling</p>
      <button style={style} onClick={showHideButtonHandler}>Show/Hide Persons</button>
      {personView}
  </div>
    
  );
}

// export default Radium(App);
export default App;
