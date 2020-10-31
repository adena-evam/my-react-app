import React from 'react';
const person = (props) => {
    
return (

    <div className="personStyle">
        I'm a {props.name} and my age is {props.age}
       <p onClick={props.click}>I'm a <b>{props.name}</b> and my age is {props.age}</p>
    </div>
);
}

export default person;