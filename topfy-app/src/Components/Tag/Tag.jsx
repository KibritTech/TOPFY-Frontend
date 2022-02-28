import React from "react";
import { useState } from "react";
import styles from "./Tag.module.css";
function Tag(props) {
  let [isSelected, setSelection] = useState(false);
  const SelectionHandler = () => {
    setSelection((isSelected = !isSelected));
    if (props.isMain) {
      props.onTagSelect(props.id, isSelected);
      props.onSelectSave({ id: props.id, name: props.name }, isSelected);
    } else {
      let filteredTags = JSON.parse(localStorage.getItem("filterTags"));
      if (!filteredTags) {
        filteredTags = [];
      }
      if (isSelected) {
        filteredTags.push({ id: props.id, name: props.name });
      } else {
        filteredTags = [...filteredTags.filter((el) => props.id != el.id)];
      }
      localStorage.setItem("filterTags", JSON.stringify(filteredTags));
      props.onSelect();
    }
  };
  let classes = isSelected ? styles.tag + " " + styles.activeTag : styles.tag;
  return (
    <div className={classes} onClick={SelectionHandler}>
      {props.name}
    </div>
  );
}

export default Tag;
