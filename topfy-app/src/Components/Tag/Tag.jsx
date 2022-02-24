import React from "react";
import { useState } from "react";
import styles from "./Tag.module.css";
function Tag(props) {
  let [isSelected, setSelection] = useState(false);

  const SelectionHandler = () => {
    setSelection((isSelected = !isSelected));
  };
  return (
    <div className="">
      <div
        className={
          isSelected ? styles.tag + " " + styles.activeTag : styles.tag
        }
        onClick={SelectionHandler}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Tag;
