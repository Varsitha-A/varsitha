import React from "react";

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Your age is {props.age}.</p>
    </div>
  );
}

export default Greeting;
