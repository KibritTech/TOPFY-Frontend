import React from "react";
import Title from "../../UI/Typography/Title/Title";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div>
      <Title>Welcome Page</Title>
      <Link to="/tagselect">Explore</Link>
    </div>
  );
}

export default Welcome;
