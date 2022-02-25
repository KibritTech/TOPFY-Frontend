import React from "react";
import { useState } from "react";
import styles from "./Tag.module.css";
function Tag(props) {
  let [isSelected, setSelection] = useState(false);
  const SelectionHandler = () => {
    setSelection((isSelected = !isSelected));
    props.onTagSelect(props.id, isSelected);
    props.onSelectSave({ id: props.id, name: props.name }, isSelected);
  };
  let classes = isSelected ? styles.tag + " " + styles.activeTag : styles.tag;
  return (
    <div className={classes} onClick={SelectionHandler}>
      {props.name}
    </div>
  );
}

export default Tag;
