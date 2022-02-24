import React from "react";

function Image(props) {
  return (
    <div className={props.classes}>
      <img src={props.source} />
    </div>
  );
}

export default Image;
