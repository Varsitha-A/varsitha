import React from "react";

function Props({ name, age, course }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Props;
