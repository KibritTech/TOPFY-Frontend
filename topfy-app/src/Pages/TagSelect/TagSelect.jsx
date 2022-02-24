import React from "react";
import Title from "../../UI/Typography/Title/Title";
import { Link } from "react-router-dom";
function TagSelect() {
  return (
    <div>
      <Title className="text-center">Tag Selection</Title>
      <Link to="/home">Home Feed</Link>
    </div>
  );
}

export default TagSelect;
