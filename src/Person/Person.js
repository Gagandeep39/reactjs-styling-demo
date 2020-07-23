import React from "react";
import './Person.css';
// ES6 style 
// Props is the tecnical ketword for the attribute of an element
// Here we can hoever give anyname
const person = (props) => {
    return (
        <div class="Person">
            <hr/>
            <p> I'm a Person!</p>
            <p> Name provided as attribute: {props.name}, age: {props.age}</p>
            <p>Age { Math.floor(Math.random() * 100) }</p>
            <p> {props.children} </p>
            <button onClick={props.deleteButton} >Delete</button>

            {/* Will be executed whever someinput is etered in Sadnes textbox */}
            <input type="text" onChange={props.change}></input>
        </div>
    )
};

export default person;
// Older method
// const person = function (){}
