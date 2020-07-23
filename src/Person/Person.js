import React from 'react';
import classes from './Person.module.css';
import styled from 'styled-components';
// import Radium from 'radium';
// ES6 style
// Props is the tecnical ketword for the attribute of an element
// Here we can hoever give anyname
const person = (props) => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    margin: 16px;
    @media (min-width: 500px) {
      width: 450px;
    }
  `;

  return (
    // <div className='Person' style={style}>
    //   <p> I'm a Person!</p>
    //   <p>Name provided as attribute: {props.name}, age: {props.age} </p>
    //   <p>Age {Math.floor(Math.random() * 100)}</p>
    //   <p> {props.children} </p>
    //   <button onClick={props.deleteButton}>Delete</button>
    //   <br />
    //   <input type='text' onChange={props.change} />
    // </div>


    // Style Div
    // <StyledDiv>
    //   <p> I'm a Person!</p>
    //   <p>Name provided as attribute: {props.name}, age: {props.age} </p>
    //   <p>Age {Math.floor(Math.random() * 100)}</p>
    //   <p> {props.children} </p>
    //   <button onClick={props.deleteButton}>Delete</button>
    //   <br />
    //   <input type='text' onChange={props.change} />
    // </StyledDiv>


    // Css Module
    <div className={classes.Person}>
      <p> I'm a Person!</p>
      <p>Name provided as attribute: {props.name}, age: {props.age} </p>
      <p>Age {Math.floor(Math.random() * 100)}</p>
      <p> {props.children} </p>
      <button onClick={props.deleteButton}>Delete</button>
      <br />
      <input type='text' onChange={props.change} />
    </div>
  );
};

// export default Radium(person);
export default person;
// Older method
// const person = function (){}
