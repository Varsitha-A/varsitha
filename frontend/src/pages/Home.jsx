import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <p>This is the home page.</p>
      <ul>
        <li>
          <Link to="/State">usestate</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
